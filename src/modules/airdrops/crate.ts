import { campaigns, campaign_keys, claimToken, PlayCoinSound } from './loot'
import * as utils from '@dcl/ecs-scene-utils'

type dropArea = {
  SW: Vector2
  NE: Vector2
}

let DROP_HEIGHT = 15

// let stageDropArea: dropArea = {
//   SW: new Vector2(3, 3),
//   NE: new Vector2(9, 9),
// }

underwater: let stageDropArea: dropArea = {
  SW: new Vector2(45, 50),
  NE: new Vector2(92, 62),
}

export class Crate extends Entity {
  openUi: boolean = false
  campaign: string
  campaign_key: campaign_keys
  parachute: Entity
  onFinished?: () => void
  startPos: Vector3
  endPos: Vector3 = Vector3.Zero()
  constructor(
    model: string,
    parachuteModel: string,
    position: Vector3,
    campaign: string,
    campaign_key: campaign_keys,
    onFinished?: () => void
  ) {
    super()
    engine.addEntity(this)

    this.campaign = campaign
    this.campaign_key = campaign_key
    this.startPos = position

    if (onFinished) {
      this.onFinished = onFinished
    }

    this.addComponent(new GLTFShape(model))
    this.addComponent(
      new Transform({
        position: position,
      })
    )

    this.parachute = new Entity()
    this.parachute.addComponent(new GLTFShape(parachuteModel))
    this.parachute.addComponent(
      new Transform({ position: new Vector3(0, 1, 0) })
    )

    this.parachute.setParent(this)

    this.addComponent(
      new OnPointerDown(
        () => {
          if (this.openUi) return
          this.activate()
          this.vanish()
        },
        {
          hoverText: 'Claim Token',
        }
      )
    )

    const idleSource = new AudioSource(new AudioClip('sounds/star-idle.mp3'))
    this.addComponentOrReplace(idleSource)
    idleSource.loop = true
    idleSource.playing = true

    const spawnSource = new AudioSource(new AudioClip('sounds/star-spawn.mp3'))
    this.parachute.addComponentOrReplace(spawnSource)
    spawnSource.loop = false
    spawnSource.playing = true
  }

  async activate() {
    this.openUi = true
    let data = await claimToken(this.campaign, this.campaign_key, this)
  }
  vanish(doOnFinished: boolean = true) {
    engine.removeEntity(this.parachute)
    this.addComponent(
      new utils.ScaleTransformComponent(
        Vector3.One(),
        Vector3.Zero(),
        1,
        () => {
          engine.removeEntity(this)
        },
        utils.InterpolationType.EASEINBOUNCE
      )
    )
    // engine.removeEntity(this)
    this.runOnFinished()
    PlayCoinSound()
  }
  runOnFinished() {
    if (this.onFinished) {
      this.onFinished()
    }
  }
  async drop(startPosition?: Vector3, speed?: number) {
    if (startPosition) {
      this.startPos = startPosition
    }
    let ray: Ray = {
      origin: this.startPos,
      direction: new Vector3(0, -1, 0),
      distance: 30,
    }
    let physicsCast = PhysicsCast.instance

    await physicsCast.hitFirst(
      ray,
      (e) => {
        log('hit ground at ... ', e.hitPoint)
        if (e.hitPoint && e.hitPoint.x > 0 && e.hitPoint.z > 0) {
          this.endPos = new Vector3(e.hitPoint.x, e.hitPoint.y, e.hitPoint.z)
        } else {
          this.endPos = this.startPos.clone()
          this.endPos.y = 0
        }

        this.addComponent(
          new utils.MoveTransformComponent(
            this.startPos,
            this.endPos,
            speed ? speed : 5,
            () => {
              this.hitGround()
            }
          )
        )
      },
      0
    )
  }
  async getGroundHeight(startPosition: Vector3) {}

  hitGround() {
    this.parachute.addComponent(
      new utils.ScaleTransformComponent(
        Vector3.One(),
        Vector3.Zero(),
        1,
        () => {
          engine.removeEntity(this.parachute)
        },
        utils.InterpolationType.EASEINSINE
      )
    )
  }
}

export function dropCrate(campaign: campaigns, campaign_key: campaign_keys) {
  let crate = new Crate(
    'models/crate/crate_meta.glb',
    'models/crate/parachute_meta.glb',
    new Vector3(8, -10, 8),
    campaign,
    campaign_key
  )

  let xDiff = stageDropArea.NE.x - stageDropArea.SW.x
  let yDiff = stageDropArea.NE.y - stageDropArea.SW.y

  let finalX = Math.random() * xDiff + stageDropArea.SW.x
  let finalY = Math.random() * yDiff + stageDropArea.SW.y

  crate.drop(new Vector3(finalX, DROP_HEIGHT, finalY))
}
