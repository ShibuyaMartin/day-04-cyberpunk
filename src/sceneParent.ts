export let scene = new Entity()
scene.addComponent(
  new Transform({
    position: new Vector3(8 * 16, 0, 0),
    rotation: Quaternion.Euler(0, 270, 0),
  })
)
engine.addEntity(scene)
