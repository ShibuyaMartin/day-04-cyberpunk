//add lights_top

import resources from 'src/resources'
import { Synced } from './syncable'

//add lights_top

export let lights_top = new Synced(
  new GLTFShape('models/lights_top.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add laser_beam

export let laser_beam = new Synced(
  new GLTFShape('models/laser_beam.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add lights_center

export let lights_center = new Synced(
  new GLTFShape('models/lights_center.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add round_lights_bottom

export let round_lights_bottom = new Synced(
  new GLTFShape('models/round_lights_bottom.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
//round_lights_bottom.playAnimation('RL_B_Neutral')
//add round_lights_top

export let round_lights_top = new Synced(
  new GLTFShape('models/round_lights_top.glb'),
  true,

  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add firework_01

export let firework_01 = new Synced(
  new GLTFShape('models/firework_01.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add firework_02

export let firework_02 = new Synced(
  new GLTFShape('models/firework_01.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 36.5),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add firework_03

export let firework_03 = new Synced(
  new GLTFShape('models/firework_02.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add firework_04

export let firework_04 = new Synced(
  new GLTFShape('models/firework_02.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, -4),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add hand_icon

export let hand_icon = new Synced(
  new GLTFShape('models/hand_icon.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add siren

export let siren = new Synced(
  new GLTFShape('models/siren.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
//siren.playAnimation('deactivate')

//add siren_02

export let siren_02 = new Synced(
  new GLTFShape('models/siren.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, -4.5),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
//siren_02.playAnimation('deactivate')

//add fire

export let fire = new Synced(
  new GLTFShape('models/fire.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add building_lights

export let building_lights = new Synced(
  new GLTFShape('models/building_lights.glb'),
  false,
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

//add building_lights_02

export let building_lights_02 = new Synced(
  new GLTFShape('models/building_lights.glb'),
  false,
  new Transform({
    position: new Vector3(176.5, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)

// artist signs

export let akira = new Synced(
  new GLTFShape('models/akira_the_don.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

export let chet = new Synced(
  new GLTFShape('models/chet_porter.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

export let cody = new Synced(
  new GLTFShape('models/cody_frost.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

export let harrison = new Synced(
  new GLTFShape('models/harrison_first.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

export let paris = new Synced(
  new GLTFShape('models/paris_hilton_and_special_guest.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

export let spottie = new Synced(
  new GLTFShape('models/spottie_wifi.glb'),
  true,
  new Transform({
    position: new Vector3(64, 0, 64),
  })
)

//add paris_01

// export let paris_01 = new Entity()
// paris_01.addComponent(new GLTFShape('models/genies/paris_01.glb'))
// paris_01.addComponent(
//   new Transform({
//     position: new Vector3(64, 0, 64),
//     rotation: Quaternion.Euler(0, 270, 0),
//     scale: new Vector3(1, 1, 1),
//   })
// )
// engine.addEntity(paris_01)
