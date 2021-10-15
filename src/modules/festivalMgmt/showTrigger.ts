import { showType, subtitlesList } from 'src/showMetadata'
import { runAction } from '../festivalMgmt/manageShow'
import { NodeCue, SubtitleSystem } from '../subtitle/SubtitleSystem'
import { VideoSystem } from '../festivalMgmt/VideoSystem'
import * as utils from '@dcl/ecs-scene-utils'
import { manager } from 'src/game'

const DEFAULT_VIDEO =
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'

export class CustomSubtitleSystem extends SubtitleSystem {
  constructor(text: string) {
    super()
    this.setSubtitlesString(text)
  }

  onCueBegin(cue: NodeCue) {
    log(`Show subtitle '${cue.data.text} at time: ${cue.data.start}`)
    runAction(cue.data.text)
    //debugShowTime(cue.data.start)
  }

  onCueEnd(cue: NodeCue) {
    // log(`Hide subtitle '${cue.data.text}`)
  }
}

export class CustomVideoSystem extends VideoSystem {
  constructor(_videoTexture: VideoTexture) {
    super(_videoTexture)
  }

  onChangeStatus(oldStatus: VideoStatus, newStatus: VideoStatus) {
    if (newStatus == VideoStatus.PLAYING) {
      log(
        `VideoTexture ${this.videoTexture.videoClipId} is now playing! Offset ${this.estimatedOffset}`
      )
      if (mySubtitleSystem) {
        mySubtitleSystem.resume()
      }

      //   mySubtitleSystem.setOffset(this.estimatedOffset)
    } else {
      log(
        `VideoTexture ${this.videoTexture.videoClipId} changed status to '${newStatus}'`
      )
      if (mySubtitleSystem) {
        mySubtitleSystem.pause()
      }
    }
  }

  onOffsetUpdate(estimatedOffset: number) {
    // log('offset changed ', estimatedOffset)
    // mySubtitleSystem.setOffset(estimatedOffset)
  }
}

// instance systems

export let myVideoSystem: CustomVideoSystem

export let mySubtitleSystem: CustomSubtitleSystem

//// key functions

export function startShow(showData: showType, artistId: number) {
  let currentTime = Date.now() / 1000

  let startTime = showData.startTime
  let timeDiff = currentTime - startTime

  log(
    'show started for ',
    artistId,
    ' ',
    timeDiff,
    ' seconds ago, show playing: ',
    showData
  )

  log(
    'CURRENT TIME: ',
    currentTime,
    ' SHOW START: ',
    showData.startTime,
    ' DIFF: ',
    timeDiff
  )

  // TODO: change sign with artist name

  if (timeDiff >= showData.length * 60) {
    log('show ended')
    return
  } else if (startTime > currentTime) {
    utils.setTimeout((startTime - currentTime) * 1000, () => {
      playVideo(showData, artistId, 0)
    })
    log('show will start in ', startTime - currentTime)
  } else {
    log('starting show, ', timeDiff, ' seconds late')

    playVideo(showData, artistId, timeDiff)
  }
}

export function stopShow() {
  if (manager.videoMat.albedoTexture) {
    let currentVideoTexuture = manager.videoMat.albedoTexture as VideoTexture
    currentVideoTexuture.playing = false
  }

  if (myVideoSystem) {
    engine.removeSystem(myVideoSystem)
  }

  if (mySubtitleSystem) {
    runAction('STOPALL')
    engine.removeSystem(mySubtitleSystem)
  }

  PLAYING_DEFAULT = false
}

export function playVideo(
  show: showType,
  artistId: number,
  offsetSeconds: number
) {
  log('Starting show ', show)

  stopShow()

  const myVideoClip = new VideoClip(show.link)
  const myVideoTexture = new VideoTexture(myVideoClip)

  // main video
  manager.videoMat.albedoTexture = myVideoTexture
  manager.videoMat.emissiveTexture = myVideoTexture

  myVideoTexture.seekTime(offsetSeconds)
  myVideoTexture.playing = true

  myVideoSystem = new CustomVideoSystem(myVideoTexture)
  engine.addSystem(myVideoSystem)

  mySubtitleSystem = new CustomSubtitleSystem(subtitlesList[artistId])
  mySubtitleSystem.setOffset(offsetSeconds)
  engine.addSystem(mySubtitleSystem)

  let artistSignAnimation = 'artist' + (artistId + 1)

  log('ARTIST NAME', artistSignAnimation)

  runAction(artistSignAnimation)

  // TODO: PICK SIGN W ARTIST NAME
}

let PLAYING_DEFAULT: boolean = false

export function playDefaultVideo() {
  if (PLAYING_DEFAULT) {
    return
  }

  stopShow()
  PLAYING_DEFAULT = true

  const myVideoClip = new VideoClip(DEFAULT_VIDEO)
  const myVideoTexture = new VideoTexture(myVideoClip)

  // main video
  manager.videoMat.albedoTexture = myVideoTexture
  manager.videoMat.emissiveTexture = myVideoTexture
  myVideoTexture.loop = true
  myVideoTexture.playing = true

  runAction('artist0')
}

///// DEBUG  REMOVE!!!

//startShow(shows['test'])

const input = Input.instance

input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
  log('POS: ', Camera.instance.feetPosition)
  runAction('state5')
})

// /////// REMOVE ////////
// // DEBUG PANEL  (to remove!)
// let canvas = new UICanvas()
// let debugTimeMarker = new UIText(canvas)
// debugTimeMarker.positionX = 400
// debugTimeMarker.color = Color4.Red()

// function debugShowTime(time: number) {
//   let ms = time % 1000
//   let seconds = Math.floor(time / 1000) % 60
//   let minutes = Math.floor(time / (60 * 1000))
//   let hours = Math.floor(minutes / 60)

//   debugTimeMarker.value =
//     'last change at: ' + hours + ':' + minutes + ':' + seconds + '.' + ms
// }
