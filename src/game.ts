
//add metaverse

import { hud } from "./builderhud/BuilderHUD"
import resources from "./resources"

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
    position: new Vector3(23, -15, 72),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(2.5, 2.5, 2.5)
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


//add elevator

export let elevator = new Entity()
elevator.addComponent(new GLTFShape('models/elevator.glb'))
elevator.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(elevator)


//add signs

export let signs = new Entity()
signs.addComponent(new GLTFShape('models/signs.glb'))
signs.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(signs)


//add laser_beam

export let laser_beam = new Entity()
laser_beam.addComponent(new GLTFShape('models/laser_beam.glb'))
laser_beam.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(laser_beam)


//add lights_center

export let lights_center = new Entity()
lights_center.addComponent(new GLTFShape('models/lights_center.glb'))
lights_center.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(lights_center)


//add lights_bottom

export let lights_bottom = new Entity()
lights_bottom.addComponent(new GLTFShape('models/lights_bottom.glb'))
lights_bottom.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(lights_bottom) 


//add firework_01

export let firework_01 = new Entity()
firework_01.addComponent(new GLTFShape('models/firework_01.glb'))
firework_01.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_01)


//add firework_02

export let firework_02 = new Entity()
firework_02.addComponent(new GLTFShape('models/firework_01.glb'))
firework_02.addComponent(
  new Transform({
    position: new Vector3(48, 0, 36.5),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_02)


//add firework_03

export let firework_03 = new Entity()
firework_03.addComponent(new GLTFShape('models/firework_03.glb'))
firework_03.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_03)


//add firework_04

export let firework_04 = new Entity()
firework_04.addComponent(new GLTFShape('models/firework_03.glb'))
firework_04.addComponent(
  new Transform({
    position: new Vector3(48, 0, -4),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_04)


//add artist_01

export let artist_01 = new Entity()
artist_01.addComponent(new GLTFShape('models/artist_01.glb'))
artist_01.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(artist_01)


//add hand_icon

export let hand_icon = new Entity()
hand_icon.addComponent(new GLTFShape('models/hand_icon.glb'))
hand_icon.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(hand_icon)


//add siren

export let siren = new Entity()
siren.addComponent(new GLTFShape('models/siren.glb'))
siren.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(siren)

//add siren_02

export let siren_02 = new Entity()
siren_02.addComponent(new GLTFShape('models/siren.glb'))
siren_02.addComponent(
  new Transform({
    position: new Vector3(48, 0, -4.5),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(siren_02)


//add fire

export let fire = new Entity()
fire.addComponent(new GLTFShape('models/fire.glb'))
fire.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(fire)


//add logo_ring

export let logo_ring = new Entity()
logo_ring.addComponent(new GLTFShape('models/logo_ring.glb'))
logo_ring.addComponent(
  new Transform({
    position: new Vector3(48, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(logo_ring)






let toptexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko9.mp4"))
let texture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko5.mp4"))
let maintexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko6.mp4"))
let toprighttexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko2.mp4"))
let leftsquaremaintexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko7.mp4"))
let leftrecttexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko4.mp4"))

let circlmask = new Texture("images/circle_mask.png")

export class Screen extends Entity {

  width = 2.2
  circle = new Texture("images/circle_mask.png")


  constructor(name: string, transform: TranformConstructorArgs, texture: VideoTexture, parts: number, transforms: any[], direction: string) {
    super(name)
    this.addComponent(new Transform(transform))
    engine.addEntity(this)
    hud.attachToEntity(this)

    let last = 0
    for (let i = 0; i < parts; i++) {
      let screen = new Entity("part-" + i)
      screen.addComponent(new PlaneShape())
      screen.addComponent(new Material())
      screen.getComponent(Material).albedoTexture = texture
      screen.getComponent(Material).emissiveTexture = texture
      screen.getComponent(Material).emissiveColor = Color3.White()
      screen.getComponent(Material).emissiveIntensity = 0.6
      screen.getComponent(Material).roughness = 1.0
      screen.addComponent(new Transform(transforms[i]))
      engine.addEntity(screen)
      screen.setParent(this)
      hud.attachToEntity(screen)

      let part = 0.00
      part = (1 / parts) + (i / parts)

      switch (direction) {
        case 'horizontal':
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
          break;

        case 'vertical':
          log('last', last)
          screen.getComponent(PlaneShape).uvs = [
            0,
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
          ]
          break;
      }


      last = part
    }
  }
}

texture.playing = true
toptexture.playing = true
toprighttexture.playing = true
leftrecttexture.playing = true
maintexture.playing = true
leftsquaremaintexture.playing = true


export class SingleScreen extends Entity {

  constructor(name: string, transform: TranformConstructorArgs, texture: VideoTexture, mask: boolean) {
    super(name)
    this.addComponent(new PlaneShape())
    this.addComponent(new Transform(transform))
    this.addComponent(new Material())
    this.getComponent(Material).albedoTexture = texture
    this.getComponent(Material).emissiveTexture = texture
    this.getComponent(Material).emissiveColor = Color3.White()
    this.getComponent(Material).emissiveIntensity = 0.6
    this.getComponent(Material).roughness = 1.0
    mask ? this.getComponent(Material).alphaTexture = circlmask : null
    engine.addEntity(this)
    hud.attachToEntity(this)
  }
}

export class SplitScreen extends Entity {

  constructor(name: string, transform: TranformConstructorArgs, texture: VideoTexture) {
    super(name)
    this.addComponent(new PlaneShape())
    this.addComponent(new Transform(transform))
    this.addComponent(new Material())
    this.getComponent(Material).albedoTexture = texture
    this.getComponent(Material).emissiveTexture = texture
    this.getComponent(Material).emissiveColor = Color3.White()
    this.getComponent(Material).emissiveIntensity = 0.6
    this.getComponent(Material).roughness = 1.0
    engine.addEntity(this)
    hud.attachToEntity(this)
  }

  setUVS(uvs: any[]) {
    this.getComponent(PlaneShape).uvs = uvs
  }
}

let mainRecScreens = new Screen("parent main rect screens", { position: new Vector3(61, 18, 60), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, texture, 2, resources.transforms.mainRectScreens, "horizontal")


let leftstageparent = new Entity("leftstageparent")
leftstageparent.addComponent(new Transform({ position: new Vector3(7.5, 12.4, 42.2), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1.24, 1) }))
engine.addEntity(leftstageparent)
hud.attachToEntity(leftstageparent)

let leftsplitstage = new SplitScreen("tl1", { position: new Vector3(48, 10.4, 64), rotation: Quaternion.Euler(0, 231, 0), scale: new Vector3(11.3, 3.4, 1) }, leftrecttexture)
leftsplitstage.setUVS([0, .5, 1, .5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
leftsplitstage.setParent(leftstageparent)

let leftsplitstage2 = new SplitScreen("tl2", { position: new Vector3(48, 5.7, 64), rotation: Quaternion.Euler(0, 231, 0), scale: new Vector3(11.3, 3.4, 1) }, leftrecttexture)
leftsplitstage2.setUVS([0, 1, 1, 1, 1, .5, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0,])
leftsplitstage2.setParent(leftstageparent)


let rightstageparent = new Entity("rightstageparent")
rightstageparent.addComponent(new Transform({ position: new Vector3(7.5, 12.4, -42.6), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1.24, 1) }))
engine.addEntity(rightstageparent)
hud.attachToEntity(rightstageparent)

let rightsplitstage = new SplitScreen("tl1", { position: new Vector3(48, 10.4, 64), rotation: Quaternion.Euler(0, 309, 0), scale: new Vector3(11.3, 3.4, 1) }, leftrecttexture)
rightsplitstage.setUVS([0, .5, 1, .5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
rightsplitstage.setParent(rightstageparent)

let rightsplitstage2 = new SplitScreen("tl2", { position: new Vector3(48, 5.7, 64), rotation: Quaternion.Euler(0, 309, 0), scale: new Vector3(11.3, 3.4, 1) }, leftrecttexture)
rightsplitstage2.setUVS([0, 1, 1, 1, 1, .5, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0,])
rightsplitstage2.setParent(rightstageparent)



let tlparent = new Entity("tlparent")
tlparent.addComponent(new Transform({ position: new Vector3(19.3, 32.1, 44.1), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1.24, 1) }))
engine.addEntity(tlparent)
hud.attachToEntity(tlparent)

let tl1 = new SplitScreen("tl1", { position: new Vector3(48, 3.7, 64), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl1.setUVS([0, 1, .125, 1, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl1.setParent(tlparent)

let tl2 = new SplitScreen("tl2", { position: new Vector3(48, 3.7, 60.9), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl2.setUVS([.125, 1, .375, 1, .375, 0, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl2.setParent(tlparent)

let tl3 = new SplitScreen("tl3", { position: new Vector3(48, 3.7, 57.8), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl3.setUVS([.375, 1, .5, 1, .5, 0, .375, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl3.setParent(tlparent)

let tl4 = new SplitScreen("tl4", { position: new Vector3(48, 3.7, 54.6), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl4.setUVS([.5, 1, .625, 1, .625, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl4.setParent(tlparent)

let tl5 = new SplitScreen("tl5", { position: new Vector3(48, 3.7, 51.5), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl5.setUVS([.625, 1, .75, 1, .75, 0, .625, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl5.setParent(tlparent)

let tl6 = new SplitScreen("tl6", { position: new Vector3(48, 3.7, 48.4), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl6.setUVS([.75, 1, .875, 1, .875, 0, .75, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl6.setParent(tlparent)


let tl7 = new SplitScreen("tl7", { position: new Vector3(48, 3.7, 45.3), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl7.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl7.setParent(tlparent)


let tl8 = new SplitScreen("tl8", { position: new Vector3(48, 3.7, 42.2), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toptexture)
tl8.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
tl8.setParent(tlparent)





let topparent = new Entity("topparent")
topparent.addComponent(new Transform({ position: new Vector3(28.3, 35.2, 10.9), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1.24, 1) }))
engine.addEntity(topparent)
hud.attachToEntity(topparent)

let top1 = new SplitScreen("tl1", { position: new Vector3(48, 3.7, 64), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top1.setUVS([0, 1, .125, 1, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top1.setParent(topparent)

let top2 = new SplitScreen("tl2", { position: new Vector3(48, 3.7, 60.9), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top2.setUVS([.125, 1, .375, 1, .375, 0, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top2.setParent(topparent)

let top3 = new SplitScreen("tl3", { position: new Vector3(48, 3.7, 57.8), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top3.setUVS([.375, 1, .5, 1, .5, 0, .375, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top3.setParent(topparent)

let top4 = new SplitScreen("tl4", { position: new Vector3(48, 3.7, 54.6), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top4.setUVS([.5, 1, .625, 1, .625, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top4.setParent(topparent)

let top5 = new SplitScreen("tl5", { position: new Vector3(48, 3.7, 51.1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top5.setUVS([.625, 1, .75, 1, .75, 0, .625, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top5.setParent(topparent)

let top6 = new SplitScreen("tl6", { position: new Vector3(48, 3.7, 48), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top6.setUVS([.75, 1, .875, 1, .875, 0, .75, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top6.setParent(topparent)

let top7 = new SplitScreen("tl7", { position: new Vector3(48, 3.7, 44.9), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top7.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top7.setParent(topparent)

let top8 = new SplitScreen("tl8", { position: new Vector3(48, 3.7, 41.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, toprighttexture)
top8.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
top8.setParent(topparent)








let rightparent = new Entity("righttop")
rightparent.addComponent(new Transform({ position: new Vector3(19.3, 32.1, -22.7), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1.24, 1) }))
engine.addEntity(rightparent)
hud.attachToEntity(rightparent)

let right1 = new SplitScreen("tl1", { position: new Vector3(48, 3.7, 64), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right1.setUVS([0, 1, .125, 1, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right1.setParent(rightparent)

let right2 = new SplitScreen("tl2", { position: new Vector3(48, 3.7, 60.9), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right2.setUVS([.125, 1, .375, 1, .375, 0, .125, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right2.setParent(rightparent)

let right3 = new SplitScreen("tl3", { position: new Vector3(48, 3.7, 57.8), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right3.setUVS([.375, 1, .5, 1, .5, 0, .375, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right3.setParent(rightparent)

let right4 = new SplitScreen("tl4", { position: new Vector3(48, 3.7, 54.6), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right4.setUVS([.5, 1, .625, 1, .625, 0, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right4.setParent(rightparent)

let right5 = new SplitScreen("tl5", { position: new Vector3(48, 3.7, 51.5), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right5.setUVS([.625, 1, .75, 1, .75, 0, .625, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right5.setParent(rightparent)

let right6 = new SplitScreen("tl6", { position: new Vector3(48, 3.7, 48.4), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right6.setUVS([.75, 1, .875, 1, .875, 0, .75, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right6.setParent(rightparent)


let right7 = new SplitScreen("tl7", { position: new Vector3(48, 3.7, 45.3), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right7.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right7.setParent(rightparent)


let right8 = new SplitScreen("tl8", { position: new Vector3(48, 3.7, 42.2), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(2.2, 5, 1) }, texture)
right8.setUVS([.875, 1, 1, 1, 1, 0, .875, 0, 0, 0, 0, 0, 0, 0, 0, 0,])
right8.setParent(rightparent)




new SingleScreen("main stage", resources.transforms.mainstagescreen, maintexture, true)
new SingleScreen("left cicle", resources.transforms.leftcircle, maintexture, true)
new SingleScreen("right cicle", resources.transforms.rightcircle, maintexture, true)
new SingleScreen("left main square", resources.transforms.leftsquaremain, leftsquaremaintexture, false)
new SingleScreen("right main square", resources.transforms.rightsquaremain, leftsquaremaintexture, false)
