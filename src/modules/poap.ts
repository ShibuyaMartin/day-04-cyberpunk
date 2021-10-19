import { getUserData } from '@decentraland/Identity'
import { getCurrentRealm } from '@decentraland/EnvironmentAPI'
import { signedFetch } from '@decentraland/SignedFetch'

import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'

let chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

let codeCheck = ''
let inscene = false
let artist = {
  name: '',
  image: '',
  eventId: '',
}

let humantrigger: PoapTimer
const canvas = new UICanvas()
let poapBox: Entity

export function enablePoapTimer(performer: any) {
  log('switching poap for ', performer)
  artist.name = performer.name
  artist.image = performer.image
  artist.eventId = performer.eventId

  poapBox.addComponentOrReplace(
    new utils.TriggerComponent(
      new utils.TriggerBoxShape(
        new Vector3(16 * 8, 16 * 8, 16 * 8),
        new Vector3(16 * 3.5, 7.5, 16 * 3.5)
      ),
      {
        // enableDebug: true,
        onCameraEnter: () => {
          inscene = true
          if (!humantrigger) {
            humantrigger = new PoapTimer()
          }
          engine.addSystem(humantrigger)
        },
        onCameraExit: () => {
          inscene = false
          engine.removeSystem(humantrigger)
        },
      }
    )
  )
}

export function getCode() {
  let code = ''
  for (var i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * (chars.length - 1 - 0 + 1) + 0)]
  }
  return code
}

export function createPoapItems() {
  poapBox = new Entity()
  poapBox.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
  engine.addEntity(poapBox)
}
createPoapItems()

export class PoapTimer {
  threshold = 60 * 5
  timer = 0
  started = false

  constructor() {
    engine.removeSystem(this)
  }

  update(dt: number) {
    log('in scene')
    if (this.timer < this.threshold) {
      this.timer += dt
    } else {
      this.timer = 0
      log('need new code for artist ', artist)
      new PoapPopup(artist.name, artist.image, getCode(), artist.eventId)
      engine.removeSystem(this)
    }
  }
}

export class PoapPopup {
  image: UIImage
  popup: ui.CustomPrompt
  code: string
  eventId: string

  constructor(name: string, image: string, code: string, eventId: string) {
    this.code = code
    this.eventId = eventId

    this.popup = new ui.CustomPrompt(ui.PromptStyles.DARK, 500, 600, false)
    this.popup.addText(name + ' POAP', 0, 250, Color4.White(), 25)
    this.popup.addText('CODE: ' + this.code, 0, -100, Color4.White(), 20)
    let text = this.popup.addTextBox(0, -175, 'enter password', (e) => {
      codeCheck = text.currentText
    })
    text.fillInBox.onTextSubmit = new OnTextSubmit((x) => {
      this.image.visible = false
      this.popup.hide()
      this.checkCode()
    })

    this.image = new UIImage(canvas, new Texture(image))
    this.image.hAlign = 'center'
    this.image.vAlign = 'center'
    this.image.sourceLeft = 0
    this.image.sourceTop = 0
    this.image.sourceWidth = 501
    this.image.sourceHeight = 501
    this.image.width = 250
    this.image.height = 250
    this.image.positionY = 40
    this.image.visible = true

    this.popup.addButton(
      'Claim POAP',
      0,
      -250,
      () => {
        this.image.visible = false
        this.popup.hide()
        this.checkCode()
      },
      ui.ButtonStyles.RED
    )
  }

  checkCode() {
    if (codeCheck == this.code) {
      log('send the poap')

      //for production
      this.makeTransaction('poap-api.decentraland.org', this.eventId)

      //for testing
      //   ui.displayAnnouncement(
      //     'You will receive the poap for event ' + this.eventId
      //   )
      //   if (inscene) {
      //     engine.addSystem(humantrigger)
      //   }
    } else {
      ui.displayAnnouncement('Incorrect code')
      humantrigger.timer = humantrigger.threshold - 10
      engine.addSystem(humantrigger)
    }
  }

  async makeTransaction(poapServer: string, event: string) {
    const userData = await getUserData()
    if (!userData || !userData.hasConnectedWeb3) {
      log('no wallet')
      return
    }
    const realm = await getCurrentRealm()

    const url = `https://${poapServer}/claim/${event}`
    let method = 'POST'
    let headers = { 'Content-Type': 'application/json' }
    let body = JSON.stringify({
      address: userData.publicKey,
      catalyst: realm ? realm.domain : '',
      room: realm ? realm.layer : '',
    })

    try {
      let response = await fetch(url, {
        headers: headers,
        method: method,
        body: body,
      })
      let data = await response.json()
      if (response.status == 200) {
        ui.displayAnnouncement('A POAP token is being sent to your wallet', 3)
        // if (inscene) {
        //   engine.addSystem(humantrigger)
        // }
      } else {
        ui.displayAnnouncement(`Oops, there was an error: "${data.error}"`, 3)
      }
    } catch {
      log('error fetching from POAP server ', url)
    }

    return
  }
}
