//add metaverse

import { hud } from './builderhud/BuilderHUD'
import resources from './resources'

export let metaverse = new Entity()
metaverse.addComponent(new GLTFShape('models/metaverse.glb'))
metaverse.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(metaverse)

//add paris_01

export let paris_01 = new Entity()
paris_01.addComponent(new GLTFShape('models/genies/paris_01.glb'))
paris_01.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(paris_01)

/*
//add fewo_01

export let fewo_01 = new Entity()
fewo_01.addComponent(new GLTFShape('models/fewo_01.glb'))
fewo_01.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(fewo_01) 

*/

//add elevator

export let elevator = new Entity()
elevator.addComponent(new GLTFShape('models/elevator.glb'))
elevator.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(elevator)

//add signs

export let signs = new Entity()
signs.addComponent(new GLTFShape('models/signs.glb'))
signs.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(signs)

//add artist_01

export let artist_01 = new Entity()
artist_01.addComponent(new GLTFShape('models/artist_01.glb'))
artist_01.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(artist_01)

//add logo_ring

export let logo_ring = new Entity()
logo_ring.addComponent(new GLTFShape('models/logo_ring.glb'))
logo_ring.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(logo_ring)
