
//add metaverse

export let metaverse = new Entity()
metaverse.addComponent(new GLTFShape('models/metaverse.glb'))
metaverse.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(metaverse)


//add fewo

export let fewo = new Entity()
fewo.addComponent(new GLTFShape('models/fewo.glb'))
fewo.addComponent(
  new Transform({
    position: new Vector3(15, -18, 72),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(3, 3, 3)
  })
)
engine.addEntity(fewo)