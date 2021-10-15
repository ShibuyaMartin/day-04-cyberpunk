// // export const myVideoClip = new VideoClip(
// //   //'videos/visuals1.mp4'
// //   //'videos/OliverResumeBPMTest.mp4'
// //   //`https://dfcg44kpkx22b.cloudfront.net/out/v1/bebc5bb8e210416c8e026aae9daa7f09/index.m3u8`
// //   //'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
// //   `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`
// //   //'https://drive.google.com/file/d/1__d7U2xDgLE0qs5nNKEoYd7csj_VF6SU/view?usp=sharing'
// // )

// import { LiveScreen } from 'src/concert/liveScreen'
// import resources from 'src/resources'

// /// Add video screens

// let liveScreens: LiveScreen[] = []

// for (let i in resources.transforms.screens) {
//   liveScreens[i].getComponent(Transform).scale = new Vector3(
//     resources.transforms.screens[i].scale.x,
//     resources.transforms.screens[i].scale.y,
//     resources.transforms.screens[i].scale.z
//   )
// }

// // S1
// const S1 = new Entity()
// const planeS1 = new PlaneShape()

// S1.addComponent(planeS1)

// S1.addComponent(
//   new Transform({
//     // position: new Vector3(64, 11, 18.3),
//     position: new Vector3(8, 12.8, 31.7),
//     scale: new Vector3(16 * 1.35, 9 * 1.35, 1),
//     rotation: Quaternion.Euler(0, 90, 0),
//     //rotation: new Quaternion(0, -8.742278e-8, 0, 1)
//   })
// )

// S1.addComponent(videoMat)

// engine.addEntity(S1)
