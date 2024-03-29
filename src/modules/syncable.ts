import * as utils from '@dcl/ecs-scene-utils'
import { scene } from 'src/sceneParent'

export class Synced extends Entity {
  events: (() => void)[] = []
  endPosition: TransformConstructorArgs | null = null
  public idleAnim: AnimationState | null = null
  public lastPlayedAnim: AnimationState | null = null
  public endAnimTimer: Entity
  public intervalAnimTimer: Entity
  constructor(
    model: GLTFShape,
    startInvisible?: boolean,
    position?: TransformConstructorArgs,
    idleAnim?: string,
    events?: (() => void)[],
    endPosition?: TransformConstructorArgs
  ) {
    super()
    this.addComponent(model)

    this.addComponent(
      new Transform(
        position
          ? position
          : {
              position: new Vector3(160, 0, 160),
              scale: new Vector3(1, 1, 1),
              rotation: Quaternion.Euler(0, 0, 0),
            }
      )
    )
    this.addComponent(new Animator())

    if (startInvisible) {
      this.getComponent(GLTFShape).visible = false
    }

    if (idleAnim) {
      this.idleAnim = new AnimationState(idleAnim, { looping: true })
      this.getComponent(Animator).addClip(this.idleAnim)
      this.idleAnim.play()
    }

    this.setParent(scene)
    engine.addEntity(this)

    if (events) {
      this.events = events
    }

    if (endPosition) {
      this.endPosition = endPosition
    }

    this.endAnimTimer = new Entity()
    engine.addEntity(this.endAnimTimer)

    this.intervalAnimTimer = new Entity()
    engine.addEntity(this.intervalAnimTimer)
    return this
  }
  appear() {
    this.getComponent(GLTFShape).visible = true
  }
  hide() {
    this.getComponent(GLTFShape).visible = false
  }
  playAnimation(
    animationName: string,
    noLoop?: boolean,
    duration?: number,
    speed?: number,
    interval?: number
  ) {
    // if (this.lastPlayedAnim) {
    //   this.lastPlayedAnim.stop()
    // }

    if (this.endAnimTimer.hasComponent(utils.Delay)) {
      this.endAnimTimer.removeComponent(utils.Delay)
    }

    if (this.intervalAnimTimer.hasComponent(utils.Interval)) {
      this.intervalAnimTimer.removeComponent(utils.Interval)
    }

    if (!this.getComponent(GLTFShape).visible) {
      this.getComponent(GLTFShape).visible = true
    }

    let newAnim = this.getComponent(Animator).getClip(animationName)

    if (speed) {
      newAnim.speed = speed
    } else {
      newAnim.speed = 1
    }

    if (noLoop) {
      newAnim.looping = false

      if (interval && duration) {
        playOnceAndIdle(this, newAnim, duration)
        this.intervalAnimTimer.addComponentOrReplace(
          new utils.Interval(interval * 1000, () => {
            playOnceAndIdle(this, newAnim, duration)
          })
        )
      } else if (duration) {
        // play once & idle
        playOnceAndIdle(this, newAnim, duration)
      } else {
        // play once and stay on last frame
        newAnim.looping = false
        newAnim.play()
        this.lastPlayedAnim = newAnim
      }
    } else {
      newAnim.looping = true
      //   newAnim.stop()
      newAnim.play(true)
      this.lastPlayedAnim = newAnim
    }
  }
  playIdleAnimation() {
    // if (this.lastPlayedAnim) {
    //   this.lastPlayedAnim.stop()
    // }

    if (this.idleAnim) {
      this.idleAnim.play()
      this.lastPlayedAnim = this.idleAnim
    }
  }
  setNewIdleAnim(animName: string) {
    if (this.idleAnim) {
      this.idleAnim.stop()
    }

    this.idleAnim = new AnimationState(animName, { looping: true })
    this.getComponent(Animator).addClip(this.idleAnim)
    this.idleAnim.play()
    this.lastPlayedAnim = this.idleAnim
  }
  stopAllAnimations() {
    if (this.lastPlayedAnim) {
      this.lastPlayedAnim.stop()
    }
  }

  triggerEvent(index: number) {
    if (this.events[index]) {
      this.events[index]()
    }
  }
}

export function playOnceAndIdle(
  ent: Synced,
  anim: AnimationState,
  duration: number
) {
  //   if (ent.lastPlayedAnim) {
  //     ent.lastPlayedAnim.stop()
  //   }

  anim.looping = false
  anim.play()
  ent.lastPlayedAnim = anim
  if (duration) {
    ent.endAnimTimer.addComponentOrReplace(
      new utils.Delay(duration * 1000, () => {
        // if (ent.lastPlayedAnim) {
        //   ent.lastPlayedAnim.stop()
        // }
        //anim.stop()
        if (ent.idleAnim) {
          ent.idleAnim.play()
          ent.lastPlayedAnim = ent.idleAnim
        }
      })
    )
  }
}
