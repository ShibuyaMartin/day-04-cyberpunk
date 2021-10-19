import { scene } from 'src/sceneParent'

export function followingHead() {
  let headParent = new Entity()
  headParent.addComponent(
    new Transform({
      position: new Vector3(64, 20, 12),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(1, 1, 1),
    })
  )
  engine.addEntity(headParent)

  let head = new Entity()

  head.addComponent(
    new Transform({
      rotation: Quaternion.Euler(0, 180, 0),
    })
  )

  head.addComponent(new GLTFShape('models/head_cyberpunk.glb'))
  //   head.setParent(scene)
  //ha.addEntity(head)
  head.setParent(headParent)

  class KrakenWatch implements ISystem {
    timer: number = 0
    checkInterval: number
    startRot: Quaternion = headParent.getComponent(Transform).rotation.clone()
    endRot: Quaternion
    fraction: number = 0
    rotating: boolean = false
    rotSpeed: number
    easing: CurveType

    constructor(checkInterval: number, rotSpeed: number, easing: CurveType) {
      this.checkInterval = checkInterval
      this.rotSpeed = rotSpeed
      this.easing = easing
    }
    update(dt: number) {
      //   log(dt)
      this.timer += dt
      if (this.timer > this.checkInterval) {
        this.timer = 0
        this.getAngle()
      }

      if (this.rotating) {
        let transform = headParent.getComponent(Transform)
        if (this.fraction <= 1) {
          let easingIndex = easingConverter(this.fraction, this.easing)
          let rot = Quaternion.Slerp(this.startRot, this.endRot, easingIndex)
          transform.rotation = rot
          this.fraction += dt * this.rotSpeed
          if (this.fraction > 1) {
            this.fraction === 1
          }
        } else {
          this.rotating = false
        }
      }
    }
    getAngle() {
      let eyePos = headParent.getComponent(Transform).position
      let playerPos = Camera.instance.position.clone()

      //   log('PLAYER POS ', playerPos)
      let direction = eyePos.subtract(playerPos)

      //   log('distance :', direction.lengthSquared(), ' dir: ', direction)

      if (playerPos.x === 0 && playerPos.y === 0) return
      if (playerPos.z > 20) return
      if (direction.lengthSquared() > 600) {
        this.endRot = Quaternion.LookRotation(direction, Vector3.Up()) //FromToRotation(eyePos, playerPos)
      } else {
        this.endRot = Quaternion.Zero()
      }

      this.rotating = true
      this.fraction = 0
      this.startRot = headParent.getComponent(Transform).rotation.clone()
    }
  }

  engine.addSystem(new KrakenWatch(3, 0.5, CurveType.EASEINOUTCUBIC))
}

export enum CurveType {
  LINEAR = 'linear',

  EASEINSINE = 'easeinsine',
  EASEOUTSINE = 'easeoutsine',
  EASEINOUTSINE = 'easeinoutsine',

  EASEINQUADRATIC = 'easeinquadratic',
  EASEOUTQUADRATIC = 'easeoutquadratic',
  EASEINOUTQUADRATIC = 'easeinoutquadratic',

  EASEINCUBIC = 'easeincubic',
  EASEOUTCUBIC = 'easeoutcubic',
  EASEINOUTCUBIC = 'easeinoutcubic',

  EASEINEXPO = 'easeinexpo',
  EASEOUTEXPO = 'easeoutexpo',
  EASEINOUTEXPO = 'easeinoutexpo',

  EASEINELASTIC = 'easeinelastic',
  EASEOUTELASTIC = 'easeoutelastic',
  EASEINOUTELASTIC = 'easeinoutelastic',

  EASEINBOUNCE = 'easeinbounce',
  EASEOUTEBOUNCE = 'easeoutbounce',
  EASEINOUTBOUNCE = 'easeinoutbounce',
}

export function easingConverter(x: number, curveType: CurveType) {
  switch (curveType) {
    case CurveType.LINEAR:
      return x
      break
    case CurveType.EASEINSINE:
      return 1 - Math.cos((x * Math.PI) / 2)
      break
    case CurveType.EASEOUTSINE:
      return Math.sin((x * Math.PI) / 2)
      break
    case CurveType.EASEINOUTSINE:
      return -(Math.cos(Math.PI * x) - 1) / 2
      break
    case CurveType.EASEINQUADRATIC:
      return x * x
      break
    case CurveType.EASEOUTQUADRATIC:
      return 1 - (1 - x) * (1 - x)
      break
    case CurveType.EASEINOUTQUADRATIC:
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
      break

    case CurveType.EASEINCUBIC:
      return x * x * x
      break
    case CurveType.EASEOUTCUBIC:
      return 1 - Math.pow(1 - x, 3)
      break
    case CurveType.EASEINOUTCUBIC:
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
      break
    case CurveType.EASEINEXPO:
      return x === 0 ? 0 : Math.pow(2, 10 * x - 10)
      break
    case CurveType.EASEOUTEXPO:
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
      break
    case CurveType.EASEINOUTEXPO:
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2
      break

    case CurveType.EASEINELASTIC:
      const c4 = (2 * Math.PI) / 3

      return x === 0
        ? 0
        : x === 1
        ? 1
        : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4)
      break
    case CurveType.EASEOUTELASTIC:
      const c5 = (2 * Math.PI) / 3

      return x === 0
        ? 0
        : x === 1
        ? 1
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c5) + 1
      break

    case CurveType.EASEINOUTELASTIC:
      const c6 = (2 * Math.PI) / 4.5

      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c6)) / 2
        : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c6)) / 2 + 1
      break

    case CurveType.EASEINBOUNCE:
      return 1 - bounce(1 - x)
      break
    case CurveType.EASEOUTEBOUNCE:
      return bounce(x)
      break
    case CurveType.EASEINOUTBOUNCE:
      return x < 0.5 ? (1 - bounce(1 - 2 * x)) / 2 : (1 + bounce(2 * x - 1)) / 2
      break
  }
}

function bounce(x: number) {
  const n1 = 7.5625
  const d1 = 2.75

  if (x < 1 / d1) {
    return n1 * x * x
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375
  }
}
