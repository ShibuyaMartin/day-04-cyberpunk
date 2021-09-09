
//add metaverse

import { hud } from "./builderhud/BuilderHUD"

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
    position: new Vector3(20, -18, 72),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(3, 3, 3)
  })
)
engine.addEntity(fewo)


//add lights_top

export let lights_top = new Entity()
lights_top.addComponent(new GLTFShape('models/lights_top.glb'))
lights_top.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(lights_top)


let texture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko5.mp4"))



export class Screen extends Entity {

  width = 2.2
  circle = new Texture("src/concert/images/circle_mask.png")


  constructor(name: string, transform: TranformConstructorArgs, single?: boolean, mask?: boolean, parts?: number, spacing?: number) {
    super(name)
    this.addComponent(new Transform(transform))
    engine.addEntity(this)
    hud.attachToEntity(this)

    if (single) {
      this.addComponent(new PlaneShape())
    }

    if (mask) {

    }

    if (parts) {
      let last = 0
      for (let i = 0; i < parts; i++) {
        log('last', last)
        let screen = new Entity("part-" + i)
        screen.addComponent(new PlaneShape())
        screen.addComponent(new Material())
        screen.getComponent(Material).albedoTexture = texture
        screen.addComponent(new Transform({ position: new Vector3(2 + (spacing ? (i * spacing) : 0), 0, 0), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(this.width, 5, 1) }))
        engine.addEntity(screen)
        screen.setParent(this)
        hud.attachToEntity(screen)

        let part = 0.00
        part = (1 / parts) + (i / parts)

        screen.getComponent(PlaneShape).uvs = [
          last,
          1,

          part,
          1,

          part,
          0,

          last,
          0,

          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ]

        last = part
        log('last new', last)

      }
    }
  }
}


let t = new Screen("test", { position: new Vector3(67.3, 36.7, 83.8), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1.3, 1) }, false, undefined, 8, 3.2)
hud.attachToEntity(t)

let u = new Screen("u", { position: new Vector3(76.3, 39.7, 50.3), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1.3, 1) }, false, false, 8, 3.2)
hud.attachToEntity(u)

let v = new Screen("v", { position: new Vector3(67.3, 36.7, 16.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1.3, 1) }, false, undefined, 8, 3.2)
hud.attachToEntity(v)

texture.playing = true