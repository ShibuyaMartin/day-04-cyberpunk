import { hud } from 'src/builderhud/BuilderHUD'
import resources from 'src/resources'

// let texture = new VideoTexture(
//   new VideoClip('https://dclteam.s3.us-west-1.amazonaws.com/ko9.mp4')
// )
// texture.volume = 0
// texture.playing = true
// texture.loop = true

const circle = new Texture('src/concert/images/circle_mask.png')

export let videoMat = new Material()
export let vidMatMask = new Material()

videoMat.alphaTexture = circle
videoMat.emissiveIntensity = 3
videoMat.emissiveColor = Color3.White()
videoMat.roughness = 0
videoMat.specularIntensity = 1
videoMat.transparencyMode = 2

vidMatMask.alphaTexture = circle
vidMatMask.emissiveIntensity = 3
vidMatMask.emissiveColor = Color3.White()
vidMatMask.roughness = 0
vidMatMask.specularIntensity = 1
vidMatMask.transparencyMode = 2

for (var i = 0; i < resources.screens.length; i++) {
  let video = new Entity('video-' + i)
  video.addComponent(new PlaneShape())
  video.addComponent(new Transform(resources.screens[i].transform))
  if (resources.screens[i].mask) {
    video.addComponent(vidMatMask)
  } else {
    video.addComponent(videoMat)
  }
  resources.screens[i].uvs
    ? (video.getComponent(PlaneShape).uvs = resources.screens[i].uvs)
    : null
  engine.addEntity(video)
  hud.attachToEntity(video)
}
