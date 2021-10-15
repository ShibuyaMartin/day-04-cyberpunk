import * as utils from '@dcl/ecs-scene-utils'
import { triggerEmote, PredefinedEmote } from '@decentraland/RestrictedActions'

export let danceAreas: any = [
  {
    transform: {
      position: new Vector3(30, 0.65, 30),
      rotation: Quaternion.Euler(90, 0, 0),
      scale: new Vector3(20, 40, 20),
    },
    type: 'all',
  },
]

export function createDanceAreas() {
  for (let i in danceAreas) {
    let area = new Entity('dance-' + i)
    area.addComponent(new Transform(danceAreas[i].transform))

    // executeTask(async () => {
    //   if (await isPreviewMode()) {
    // area.addComponent(new PlaneShape())
    //   }
    // })

    engine.addEntity(area)

    let dsystem = new DanceSystem(danceAreas[i].type)

    area.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerSphereShape(6.5, new Vector3(0, 3, 0)),
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
