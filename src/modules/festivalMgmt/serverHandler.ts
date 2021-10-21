import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { FAKING_LOCALLY } from 'src/showMetadata'
import { STAGE_ID } from './manageShow'
import {
  playDefaultVideo,
  PLAYING_DEFAULT,
  startShow,
  stopShow,
} from './showTrigger'

export let data: any

let PING_INTERVAL = 5000

let firstPing: boolean = true

let serverInterval = new Entity()
engine.addEntity(serverInterval)
serverInterval.addComponent(
  new utils.Interval(PING_INTERVAL, () => {
    pingServer()
  })
)

async function pingServer() {
  if (playerFar) return
  if (FAKING_LOCALLY) return
  let result = await fetch(
    'https://dclteam.s3.us-west-1.amazonaws.com/festival.json?v=' +
      Date.now() / 1000
  )
  let response = await result.json()

  if (!data) {
    data = response
  } else {
    checkNewMessage(response)
    firstPing = false
  }
}

function checkNewMessage(res: any) {
  let stage = res.stages[STAGE_ID]

  //   log('here', stage)

  // stop polling server if show over
  //   if (stage.ended) {
  //     serverInterval.removeComponent(utils.Interval)
  //     log('NO LONGER CHECKING SERVER')
  //     // show message?
  //   }

  // Global message
  if (data.global.message != res.global.message) {
    data.global.message = res.global.message
    ui.displayAnnouncement(data.global.message)
  }

  //   Stage message
  if (
    stage &&
    stage.message &&
    data.stages[STAGE_ID].message != stage.message
  ) {
    data.stages[STAGE_ID].message = stage.message
    ui.displayAnnouncement(stage.message)
  }

  // Show handling
  if (
    stage &&
    (stage.artistId === -1 || stage.artistId === 500 || !stage.live) &&
    !data.stages[STAGE_ID].live
  ) {
    // no show
    log('no show yet')
    playDefaultVideo(stage.runOfShow, stage.ad)
  } else if (
    stage &&
    stage.live &&
    (!data.stages[STAGE_ID].live || firstPing)
  ) {
    // show is on, I'm not playing it

    if (
      stage.runOfShow[stage.artistId].startTime +
        stage.runOfShow[stage.artistId].length <
      Date.now() / 1000
    ) {
      // show is over
      log(
        'show is over, Ended ',
        Date.now() / 1000 -
          stage.runOfShow[stage.artistId].startTime +
          stage.runOfShow[stage.artistId].length,
        ' seconds ago'
      )
      data.stages[STAGE_ID].live = false
      playDefaultVideo(stage.runOfShow, stage.ad)
      return
    } else {
      // new show running (already started or about to start)
      log('STARTING SHOW FOR ', stage.artistId)

      data.stages[STAGE_ID].live = true
      data.stages[STAGE_ID].artistId = stage.artistId
      data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId] =
        stage.runOfShow[stage.artistId]
      startShow(stage.runOfShow[stage.artistId], stage.artistId)
    }
  } else if (
    data &&
    stage &&
    stage.live &&
    data.stages[STAGE_ID].live &&
    stage.artistId !== data.stages[STAGE_ID].artistId
  ) {
    // you're playing the wrong artist

    log(
      'was playing wrong artist: ',
      data.stages[STAGE_ID].artistId,
      ' Now playing ',
      stage.artistId
    )

    data.stages[STAGE_ID].live = true
    data.stages[STAGE_ID].artistId = stage.artistId
    data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId] =
      stage.runOfShow[stage.artistId]

    startShow(stage.runOfShow[stage.artistId], stage.artistId)
  } else if (
    (stage && data && data.stages[STAGE_ID].live && !stage.live) ||
    stage.artistId === -1 ||
    stage.artistId === 500
  ) {
    // stop the show!

    log(
      'show finished ',
      Date.now() / 1000 -
        data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
          .startTime +
        data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId].length,
      ' seconds ago'
    )

    // add grace period of 2 minutes if currently watching near the end
    if (
      data &&
      data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId] &&
      Date.now() / 1000 -
        data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
          .startTime +
        data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId].length <
        60
    ) {
      // wait till next ping
      log(
        'show finished but we are giving you a few extra minutes',
        Date.now() / 1000 -
          data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
            .startTime +
          data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
            .length,
        ' seconds remaining'
      )
    } else {
      log('STOP THE SHOW NOW!')
      //stopShow()

      data.stages[STAGE_ID].live = false
      playDefaultVideo(stage.runOfShow, stage.ad)
    }
  } else if (
    data &&
    stage &&
    stage.live &&
    data.stages[STAGE_ID].live &&
    stage.artistId == data.stages[STAGE_ID].artistId &&
    Math.abs(
      data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
        .startTime - stage.runOfShow[stage.artistId].startTime
    ) >
      2 * 60
  ) {
    // playing right artist, time is off by a lot
    // reset the show!

    data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId].startTime =
      stage.runOfShow[stage.artistId].startTime
    log(
      'playing the right artist, but off by: ',
      Math.abs(
        data.stages[STAGE_ID].runOfShow[data.stages[STAGE_ID].artistId]
          .startTime - stage.runOfShow[stage.artistId].startTime
      ),
      ' seconds'
    )

    startShow(stage.runOfShow[stage.artistId], stage.artistId)
  } else {
    log('NONE OF THE CONDITIONS WERE MET ', stage, ' DATA: ', data)
  }

  //TODO
  // if server fails, resort to hardcoded metadata??
}

if (!FAKING_LOCALLY) {
  pingServer()
}

export let playerFar: boolean = true

let showTrigger = new Entity()
showTrigger.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
  })
)
engine.addEntity(showTrigger)

showTrigger.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(
      new Vector3(16 * 9, 16 * 9, 16 * 9),
      new Vector3(16 * 3.5, 7.5, 16 * 3.5)
    ),
    {
      onCameraEnter: () => {
        playerFar = false
        pingServer()
      },
      onCameraExit: () => {
        if (PLAYING_DEFAULT) {
          playerFar = true
          data.stages[STAGE_ID].live = false
          stopShow()
        }
      },
    }
  )
)
