
//add metaverse

import { hud } from "./builderhud/BuilderHUD"
import resources from "./resources"

export let metaverse = new Entity()
metaverse.addComponent(new GLTFShape('models/metaverse.glb'))
metaverse.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(metaverse)


//add building_lights

export let building_lights = new Entity()
building_lights.addComponent(new GLTFShape('models/building_lights.glb'))
building_lights.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(building_lights) 


//add building_lights_02

export let building_lights_02 = new Entity()
building_lights_02.addComponent(new GLTFShape('models/building_lights.glb'))
building_lights_02.addComponent(
  new Transform({
    position: new Vector3(176.5, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(building_lights_02) 



//add paris_01

export let paris_01 = new Entity()
paris_01.addComponent(new GLTFShape('models/genies/paris_01.glb'))
paris_01.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
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


//add lights_top

export let lights_top = new Entity()
lights_top.addComponent(new GLTFShape('models/lights_top.glb'))
lights_top.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(lights_center)


//add round_lights_bottom

export let round_lights_bottom = new Entity()
round_lights_bottom.addComponent(new GLTFShape('models/round_lights_bottom.glb'))
round_lights_bottom.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(round_lights_bottom) 

//add round_lights_top

export let round_lights_top = new Entity()
round_lights_top.addComponent(new GLTFShape('models/round_lights_top.glb'))
round_lights_top.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1,1,1)
  })
)
engine.addEntity(round_lights_top) 


//add firework_01

export let firework_01 = new Entity()
firework_01.addComponent(new GLTFShape('models/firework_01.glb'))
firework_01.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 36.5),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_02)


//add firework_03

export let firework_03 = new Entity()
firework_03.addComponent(new GLTFShape('models/firework_02.glb'))
firework_03.addComponent(
  new Transform({
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(firework_03)


//add firework_04

export let firework_04 = new Entity()
firework_04.addComponent(new GLTFShape('models/firework_02.glb'))
firework_04.addComponent(
  new Transform({
    position: new Vector3(64, 0, -4),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, -4.5),
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
    position: new Vector3(64, 0, 64),
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
    position: new Vector3(64, 0, 64),
    rotation: Quaternion.Euler(0, 270, 0),
    scale: new Vector3(1, 1, 1)
  })
)
engine.addEntity(logo_ring)

let texture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/ko9.mp4"))
texture.volume = 0
texture.playing = true
texture.loop = true

let vidmat = new Material()
let vidmatmask = new Material()


for(var i = 0; i < resources.screens.length; i++){
  let video = new Entity("vidoe-" + i)
  video.addComponent(new PlaneShape())
  video.addComponent(new Transform(resources.screens[i].transform))
  if(resources.screens[i].mask){
    video.addComponent(vidmatmask)
    video.getComponent(Material).albedoTexture = texture
    video.getComponent(Material).alphaTexture = new Texture("images/circle_mask.png")
  }
  else{
    video.addComponent(vidmat)
    video.getComponent(Material).albedoTexture = texture
  }
  resources.screens[i].uvs ? video.getComponent(PlaneShape).uvs = resources.screens[i].uvs : null
  engine.addEntity(video)
  hud.attachToEntity(video)
}

