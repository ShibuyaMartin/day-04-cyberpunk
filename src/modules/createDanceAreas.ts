import * as utils from '@dcl/ecs-scene-utils'
import { isPreviewMode } from '@decentraland/EnvironmentAPI'
import { triggerEmote, PredefinedEmote } from '@decentraland/RestrictedActions'
import { hud } from 'src/builderhud/BuilderHUD'

export let danceAreas: any = [
  {
    transform: {position: new Vector3(66,0.4,56), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(37,27,20)},
    type: 'all',
  },
  {
    transform: {position: new Vector3(31,1,56), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(20,20,20)},
    type: PredefinedEmote.HANDS_AIR,
  },
  {
    transform:  {position: new Vector3(37,0.5,27), rotation: Quaternion.Euler(90,0,0), scale: new Vector3(20,19,20)},
    type: 'all',
  },
  {
    transform: {position: new Vector3(37,16,38), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(15,23,10)},
    type: PredefinedEmote.HANDS_AIR,
  },

  {
    transform: {position: new Vector3(38,30.7,36), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(20,20,10)},
    type: PredefinedEmote.DISCO,
  },

  {
    transform:  {position: new Vector3(27,22.7,54), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(12,11,10)},
    type: PredefinedEmote.HANDS_AIR,
  },

  {
    transform: {position: new Vector3(62,30.3,28), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(23,27,10)},
    type: PredefinedEmote.HAMMER,
  },
  {
    transform: {position: new Vector3(87,14.3,36), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(19,26,10)},
    type: PredefinedEmote.HAMMER,
  },
  {
    transform: {position: new Vector3(91,30.7,38), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(16,21,10)},
    type: PredefinedEmote.HANDS_AIR,
  },
  {
    transform: {position: new Vector3(102,21.7,54), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(14,12,10)},
    type: PredefinedEmote.DISCO,
  },
  {
    transform: {position: new Vector3(80,1,26), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(15,15,10)},
    type: PredefinedEmote.HANDS_AIR,
  },

  {
    transform: {position: new Vector3(104,0.3,59), rotation: Quaternion.Euler(90,90,0), scale: new Vector3(23,22,10)},
    type: PredefinedEmote.HAMMER,
  }
]

export function createDanceAreas() {
  for (let i in danceAreas) {
    let area = new Entity('dance-' + i)
    area.addComponent(new Transform(danceAreas[i].transform))

     executeTask(async () => {
       if (await isPreviewMode()) {
          area.addComponent(new PlaneShape())
       }
     })

    engine.addEntity(area)
    hud.attachToEntity(area)

    let dsystem = new DanceSystem(danceAreas[i].type)

    area.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerBoxShape(new Vector3(area.getComponent(Transform).scale.x, area.getComponent(Transform).scale.y, area.getComponent(Transform).scale.z), new Vector3(0,2.5,0)),
        {
          enableDebug: false,
          onCameraEnter: () => {
            engine.addSystem(dsystem)
          },
          onCameraExit: () => {
            engine.removeSystem(dsystem)
          },
        }
      )
    )
  }
}

export class DanceSystem {
  length = 11
  timer = 2
  routine = null

  routines: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.HEAD_EXPLODDE,
    PredefinedEmote.HANDS_AIR,
    PredefinedEmote.DISCO,
    PredefinedEmote.DAB,
  ]
  //routines:string[] = [PredefinedEmote.ROBOT, PredefinedEmote. 'tik','tektonik','hammer', 'headexplode', 'handsair', 'disco', 'dab']

  constructor(routine: PredefinedEmote) {
    this.routine = routine
  }

  update(dt: number) {
    //log(dt)

    if (this.timer > 0) {
      this.timer -= dt
    } else {
      this.timer = this.length
      if (this.routine == 'all') {
        let rand = Math.floor(Math.random() * (this.routine.length - 0) + 0)
        triggerEmote({ predefined: this.routines[rand] })
      } else {
        triggerEmote({ predefined: this.routine })
      }
    }
  }
}

createDanceAreas()