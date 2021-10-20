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

let poapPopup: PoapPopup

export class PoapPopup {
  bg: UIImage
  image: UIImage
  button: UIImage
  artist: UIText
  input: UIInputText
  codeDisplay: UIText

  code: string
  eventId: string

  constructor() {
    this.code = ''
    this.eventId = ''

    this.bg = new UIImage(canvas, new Texture('textures/bg.png'))
    this.bg.hAlign = 'center'
    this.bg.vAlign = 'center'
    this.bg.sourceLeft = 0
    this.bg.sourceTop = 0
    this.bg.sourceWidth = 1200
    this.bg.sourceHeight = 719
    this.bg.width = 700
    this.bg.height = 420
    this.bg.visible = false

    this.image = new UIImage(canvas, new Texture(''))
    this.image.hAlign = 'center'
    this.image.vAlign = 'center'
    this.image.sourceLeft = 0
    this.image.sourceTop = 0
    this.image.sourceWidth = 501
    this.image.sourceHeight = 501
    this.image.width = 200
    this.image.height = 200
    this.image.positionY = 0
    this.image.positionX = -180
    this.image.visible = false

    this.button = new UIImage(canvas, new Texture('textures/claim.png'))
    this.button.sourceLeft = 0
    this.button.sourceTop = 0
    this.button.sourceWidth = 1002
    this.button.sourceHeight = 543
    this.button.width = 200
    this.button.height = 120
    this.button.positionY = -100
    this.button.positionX = 180
    this.button.visible = true
    this.button.onClick = new OnClick(() => {
      this.hidePopup()
      this.checkCode()
    })
    this.button.visible = false

    this.artist = new UIText(canvas)
    this.artist.value = 'Artist 1'
    this.artist.color = Color4.White()
    this.artist.positionX = 185
    this.artist.positionY = 125
    this.artist.fontSize = 30
    this.artist.hTextAlign = 'center'
    this.artist.font = new Font(Fonts.SansSerif_SemiBold)
    this.artist.visible = false

    this.codeDisplay = new UIText(canvas)
    this.codeDisplay.value = 'Code: av27'
    this.codeDisplay.color = Color4.White()
    this.codeDisplay.vAlign = 'center'
    this.codeDisplay.hAlign = 'center'
    this.codeDisplay.positionX = 185
    this.codeDisplay.positionY = 75
    this.codeDisplay.fontSize = 15
    this.codeDisplay.hTextAlign = 'center'
    this.codeDisplay.font = new Font(Fonts.SansSerif_SemiBold)
    this.codeDisplay.visible = false

    this.input = new UIInputText(canvas)
    this.input.width = '15%'
    this.input.height = '25px'
    this.input.vAlign = 'center'
    this.input.hAlign = 'center'
    this.input.fontSize = 15
    this.input.positionX = 200
    this.input.placeholder = 'Enter Code'
    this.input.placeholderColor = Color4.White()
    this.input.positionY = 15
    this.input.isPointerBlocker = true
    this.input.visible = false
    this.input.vTextAlign = 'center'
    this.input.hTextAlign = 'center'

    this.input.onChanged = new OnChanged(({ value: t }) => {
      codeCheck = t
    })

    this.input.onTextSubmit = new OnTextSubmit((x) => {
      //   codeCheck = x.text
      this.hidePopup()
      this.checkCode()
    })
  }

  hidePopup() {
    this.image.visible = false
    this.input.visible = false
    this.button.visible = false
    this.bg.visible = false
    this.codeDisplay.visible = false
    this.artist.visible = false
  }

  showPopup(name: string, image: string, code: string, eventId: string) {
    this.code = code
    this.image = new UIImage(canvas, new Texture(image))
    this.image.hAlign = 'center'
    this.image.vAlign = 'center'
    this.image.sourceLeft = 0
    this.image.sourceTop = 0
    this.image.sourceWidth = 501
    this.image.sourceHeight = 501
    this.image.width = 200
    this.image.height = 200
    this.image.positionY = 0
    this.image.positionX = -180
    this.artist.value = name
    this.eventId = eventId

    this.bg.visible = true
    this.image.visible = true
    this.artist.visible = true
    this.button.visible = true
    this.input.visible = true
    this.codeDisplay.visible = true
    this.codeDisplay.value = 'Code: ' + this.code
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
      ui.displayAnnouncement('Incorrect code, try again')
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
  poapPopup = new PoapPopup()
}
createPoapItems()

export class PoapTimer {
  threshold = 5 * 60
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
      poapPopup.showPopup(artist.name, artist.image, getCode(), artist.eventId)
      engine.removeSystem(this)
    }
  }
}
