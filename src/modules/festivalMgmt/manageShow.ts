import * as utils from '@dcl/ecs-scene-utils'
import {
  akira,
  building_lights,
  building_lights_02,
  chet,
  cody,
  fewo_01,
  fewo_02,
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
  paris_01,
  paris_02,
  paris_03,
  glow1,
  glow2,
  glow3,
  glow4,
  glow5,
  glow6,
  glow7,
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
      if (laser_beam.getComponent(GLTFShape).visible) {
        runAction('LB_Hide')
      }
      lights_top.playAnimation('TL_Neutral')
      lights_center.playAnimation('SL_Neutral')
      round_lights_bottom.hide()
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

      break

    case 'RL_B_Rise':
      round_lights_bottom.playAnimation('RL_B_Rise', true, 0, BPM / 120)
      utils.setTimeout(2500, () => {
        hand_icon.playAnimation('RL_B_V01', false, 0, BPM / 120)
      })
      break
    case 'RL_B_V01':
      round_lights_bottom.playAnimation('RL_B_V01', false, 0, BPM / 120)
      break
    case 'RL_B_V02':
      round_lights_bottom.playAnimation('RL_B_V02', false, 0, BPM / 120)
      break
    case 'RL_B_V03':
      round_lights_bottom.playAnimation('RL_B_V03', false, 0, BPM / 120)
      break
    case 'RL_B_V04':
      round_lights_bottom.playAnimation('RL_B_V04', false, 0, BPM / 120)
      break
    case 'RL_B_V05':
      round_lights_bottom.playAnimation('RL_B_V05', false, 0, BPM / 120)
      break
    case 'RL_B_Neutral':
      round_lights_bottom.playAnimation('RL_B_Neutral', false, 0, BPM / 120)
      break
    case 'RL_T_Neutral':
      round_lights_top.playAnimation('RL_T_Neutral', false, 0, BPM / 120)
      break
    case 'RL_T_On':
      round_lights_top.playAnimation('RL_T_On', false, 0, BPM / 120)
      break
    case 'RL_T_V01':
      round_lights_top.playAnimation('RL_T_V01', false, 0, BPM / 120)
      break
    case 'RL_T_V02':
      round_lights_top.playAnimation('RL_T_V02', false, 0, BPM / 120)
      break
    case 'RL_T_V03':
      round_lights_top.playAnimation('RL_T_V03', false, 0, BPM / 120)
      break
    case 'RL_T_V04':
      round_lights_top.playAnimation('RL_T_V04', false, 0, BPM / 120)
      break
    case 'RL_T_V05':
      round_lights_top.playAnimation('RL_T_V05', false, 0, BPM / 120)
      break
    case 'sirens_activate':
      siren.playAnimation('activate', false, 0, BPM / 120)
      siren_02.playAnimation('activate', false, 0, BPM / 120)
      break
    case 'sirens_deactivate':
      siren.playAnimation('deactivate')
      siren_02.playAnimation('deactivate')
      break

    case 'firework_01':
      firework_01.playAnimation('Play', true, 0, BPM / 120)
      break
    case 'firework_02':
      firework_02.playAnimation('Play', true, 0, BPM / 120)
      break
    case 'firework_03':
      firework_03.playAnimation('Play', true, 0, BPM / 120)
      break
    case 'firework_04':
      firework_04.playAnimation('Play', true, 0, BPM / 120)
      break

    case 'Hands_Neutral':
      hand_icon.playAnimation('Hands_Neutral', false, 0, BPM / 120)
      break
    case 'Hands_Rise':
      hand_icon.playAnimation('Hands_Rise', false, 0, BPM / 120)
      utils.setTimeout(830, () => {
        hand_icon.playAnimation('Hands_Neutral', false, 0, BPM / 120)
      })
      break
    case 'Hands_Hide':
      hand_icon.playAnimation('Hands_Hide', true, 0, BPM / 120)
      break
    case 'Hands_Loop':
      hand_icon.playAnimation('Hands_Loop', false, 0, BPM / 120)
      break

    case 'LB_Hide':
      laser_beam.playAnimation('LB_Hide', true, 0, BPM / 120)
      utils.setTimeout(2000, () => {
        laser_beam.hide()
      })
      break
    case 'LB_Rise':
      laser_beam.playAnimation('LB_Rise', true, 0, BPM / 120)
      utils.setTimeout(2000, () => {
        laser_beam.playAnimation('LB_Neutral', false, 0, BPM / 120)
      })
      break
    case 'LB_Neutral':
      laser_beam.playAnimation('LB_Neutral', false, 0, BPM / 120)
      break
    case 'LB_V01':
      laser_beam.playAnimation('LB_V01', false, 0, BPM / 120)
      break
    case 'LB_V02':
      laser_beam.playAnimation('LB_V02', false, 0, BPM / 120)
      break
    case 'LB_V03':
      laser_beam.playAnimation('LB_V03', false, 0, BPM / 120)
      break
    case 'LB_V04':
      laser_beam.playAnimation('LB_V04', false, 0, BPM / 120)
      break
    case 'TL_Neutral':
      lights_top.playAnimation('TL_Neutral', false, 0, BPM / 120)
      break
    case 'TP_Simple_10fps':
      lights_top.playAnimation('TP_Simple_10fps', false, 0, BPM / 120)
      break
    case 'TP_Simple_20fps':
      lights_top.playAnimation('TP_Simple_20fps', false, 0, BPM / 120)
      break
    case 'TP_V01_10fps':
      lights_top.playAnimation('TP_V01_10fps', false, 0, BPM / 120)
      break
    case 'TP_V01_20fps':
      lights_top.playAnimation('TP_V01_20fps', false, 0, BPM / 120)
      break
    case 'TP_V02_30pfs':
      lights_top.playAnimation('TP_V02_30pfs', false, 0, BPM / 120)
      break
    case 'TP_V02_60pfs':
      lights_top.playAnimation('TP_V02_60pfs', false, 0, BPM / 120)
      break
    case 'Smoke_Neutral':
      fire.playAnimation('Smoke_Neutral', false, 0, BPM / 120)
      break
    case 'Smoke_V01':
      fire.playAnimation('Smoke_V01', false, 0, BPM / 120)
      break
    case 'Smoke_V02':
      fire.playAnimation('Smoke_V02', false, 0, BPM / 120)
      break
    case 'SL_Neutral':
      lights_center.playAnimation('SL_Neutral', false, 0, BPM / 120)
      break
    case 'SL_V01':
      lights_center.playAnimation('SL_V01', false, 0, BPM / 120)
      break
    case 'SL_V02':
      lights_center.playAnimation('SL_V02', false, 0, BPM / 120)
      break
    case 'SL_V03':
      lights_center.playAnimation('SL_V03', false, 0, BPM / 120)
      break
    case 'SL_V04':
      lights_center.playAnimation('SL_V04', false, 0, BPM / 120)
      break
    case 'SL_V05':
      lights_center.playAnimation('SL_V05', false, 0, BPM / 120)
      break
    case 'StageLights_01':
      building_lights.playAnimation('StageLights_01', false, 0, BPM / 120)
      break
    case 'StageLights_02':
      building_lights.playAnimation('StageLights_02', false, 0, BPM / 120)
      break

    case 'paris_01':
      paris_01.getComponent(Transform).position.y = 0
      glow1.playAnimation('Glow_01_Action', true, 0)
      paris_01.playAnimation('Take 001', true)

      utils.setTimeout(253 * 1000, () => {
        glow2.playAnimation('Glow_02_Action', true, 0)
      })
      break

    case 'paris_02':
      paris_02.getComponent(Transform).position.y = 0
      glow3.playAnimation('Glow_03_Action', true, 0)
      paris_01.hide()
      paris_02.playAnimation('Animation', true)

      utils.setTimeout(20.7 * 1000, () => {
        glow4.playAnimation('Glow_04_Action', true, 0)
      })
      break

    case 'paris_03':
      paris_03.getComponent(Transform).position.y = 0
      glow5.playAnimation('Glow_05_Action', true, 0)
      paris_01.hide()
      paris_02.hide()
      paris_03.playAnimation('Take 001', true)
      break

    case 'fewo_01':
      fewo_01.getComponent(Transform).position.y = 0
      fewo_01.playAnimation('Take 001', true)
      utils.setTimeout(188 * 1000, () => {
        glow6.playAnimation('Glow_06_Action', true, 0)
      })
      break

    case 'fewo_02':
      fewo_02.getComponent(Transform).position.y = 0
      glow7.playAnimation('Glow_07_Action', true, 0)
      fewo_01.hide()
      fewo_02.playAnimation('Take 001.001', true)
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
      cody.appear()
      harrison.hide()
      akira.hide()
      spottie.hide()
      chet.hide()
      paris.hide()

      break

    case 'artist2':
      cody.hide()
      harrison.appear()
      akira.hide()
      spottie.hide()
      chet.hide()
      paris.hide()
      break

    case 'artist3':
      cody.hide()
      harrison.hide()
      akira.appear()
      spottie.hide()
      chet.hide()
      paris.hide()
      break

    case 'artist4':
      cody.hide()
      harrison.hide()
      akira.hide()
      spottie.appear()
      chet.hide()
      paris.hide()
      break

    case 'artist5':
      cody.hide()
      harrison.hide()
      akira.hide()
      spottie.hide()
      chet.appear()
      paris.hide()
      break

    case 'artist6':
      cody.hide()
      harrison.hide()
      akira.hide()
      spottie.hide()
      chet.hide()
      paris.appear()
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
