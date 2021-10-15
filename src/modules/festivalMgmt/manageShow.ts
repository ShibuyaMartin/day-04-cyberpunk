import * as utils from '@dcl/ecs-scene-utils'
import {
  akira,
  building_lights,
  building_lights_02,
  chet,
  cody,
  fire,
  firework_01,
  firework_02,
  firework_03,
  firework_04,
  hand_icon,
  harrison,
  laser_beam,
  lights_center,
  lights_top,
  paris,
  round_lights_bottom,
  round_lights_top,
  siren,
  siren_02,
  spottie,
} from '../animatedEntities'

// Default beats per minute of show
export let BPM = 120

export enum STAGE_IDS {
  WORLD,
  EVOLUTION,
}
export const STAGE_ID = STAGE_IDS.EVOLUTION

// NOTE: STOPALL, PAUSEALL and default must always exist

/// Run actions
export function runAction(action: string) {
  switch (action) {
    case 'STOPALL':
      runAction('PAUSEALL')
      if (RandomizerSystem._instance) {
        RandomizerSystem._instance.active = false
      }

      break
    case 'PAUSEALL':
      lights_top.playAnimation('TL_Neutral')
      laser_beam.hide()
      lights_center.playAnimation('SL_Neutral')
      round_lights_bottom.playAnimation('RL_T_Neutral')
      round_lights_top.playAnimation('RL_B_Neutral')
      firework_01.hide()
      firework_02.hide()
      firework_03.hide()
      firework_04.hide()
      hand_icon.hide()
      siren.playAnimation('deactivate')
      siren_02.playAnimation('deactivate')
      fire.hide()
      building_lights.playAnimation('StageLights_01')
      building_lights_02.playAnimation('StageLights_01')
      akira.hide()
      chet.hide()
      cody.hide()
      harrison.hide()
      paris.hide()
      spottie.hide()

    case 'TL_Rise':
      //   tentacles.playAnimation('TL_Rise', true, 2.5)
      //   utils.setTimeout(2500, () => {
      //     runAction('TL_VO1')
      //   })
      break

    case 'artist0':
      akira.hide()
      chet.hide()
      cody.hide()
      harrison.hide()
      paris.hide()
      spottie.hide()
      break

    case 'artist1':
      break

    case 'artist2':
      break

    case 'artist3':
      break

    case 'artist4':
      break

    case 'artist5':
      break

    case 'artist6':
      break

    case 'artist7':
      break

    default:
      // check if starts with BPM
      if (action.substring(0, 3) == 'BPM') {
        // Change BPM
        BPM = parseFloat(action.substring(3))
        if (RandomizerSystem._instance) {
          RandomizerSystem._instance.reset()
        }

        log('SET BPM TO ', BPM)
      }

      break
  }
}

//let currentAnim = 1

// const input = Input.instance

// input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
//   //step to next ID
//   currentAnim += 1

//   log('Playing Anim L' + (currentAnim - 1))

//   runAction('state'.concat(currentAnim.toString()))
// })

//// RANDOMIZER

export function randomizer(animations: string[], beats = 8) {
  RandomizerSystem.createAndAddToEngine()
  if (RandomizerSystem._instance) {
    RandomizerSystem._instance.events = animations
    RandomizerSystem._instance.start()
  }
}

export class RandomizerSystem implements ISystem {
  static _instance: RandomizerSystem | null = null

  timer: number = 0
  beats: number = 8
  events: string[] = []
  lastPlayed: number | null = null

  active: boolean = false

  static createAndAddToEngine(): RandomizerSystem {
    if (this._instance == null) {
      this._instance = new RandomizerSystem()
      engine.addSystem(this._instance)
    }
    return this._instance
  }

  private constructor() {
    RandomizerSystem._instance = this
  }

  update(dt: number) {
    if (!this.active) return

    this.timer += dt
    if (this.timer > (BPM / 60) * this.beats) {
      this.timer = 0
      this.playRandomAction()
    }
  }
  start() {
    this.active = true
    this.timer = 0
    this.playRandomAction()
  }
  playRandomAction() {
    let randomIndex = Math.floor(Math.random() * this.events.length)
    // log('New random animation ', randomIndex, this.events[randomIndex])
    if (this.lastPlayed && this.lastPlayed == randomIndex) {
      return
    } else if (this.lastPlayed) {
      runAction('PAUSEALL')
    }
    runAction(this.events[randomIndex])
    this.lastPlayed = randomIndex
  }
  stop() {
    this.active = false
    if (this.lastPlayed) {
      runAction('STOPALL')
    }
  }
  reset() {
    if (this.active) {
      this.timer = 0
      if (this.lastPlayed) {
        // make sure any looping animations go with the new BPM
        runAction(this.events[this.lastPlayed])
      }
    }
  }
}
