//add metaverse

import { hud } from './builderhud/BuilderHUD'
import resources from './resources'
import { scene } from './sceneParent'

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
metaverse.setParent(scene)

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
elevator.setParent(scene)

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
signs.setParent(scene)

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
artist_01.setParent(scene)

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
logo_ring.setParent(scene)

//add head_cyberpunk

export let head_cyberpunk = new Entity()
head_cyberpunk.addComponent(new GLTFShape('models/head_cyberpunk.glb'))
head_cyberpunk.addComponent(
  new Transform({
    position: new Vector3(10, 20, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(head_cyberpunk)
head_cyberpunk.setParent(scene)
