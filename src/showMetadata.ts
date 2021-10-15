import { subtitleString } from './subtitle-files/BPMtoSubs1'
import { subtitleString2 } from './subtitle-files/OliverDemoMerged2'
import { MiyaSubs } from './subtitle-files/MergeBPM_MIYA_MIYA'

export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [
  MiyaSubs,
  subtitleString2,
  subtitleString,
  subtitleString,
  subtitleString,
  subtitleString,
  subtitleString,
]

export const shows: any = {
  deadmau5: {
    link: `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`,
    subs: subtitleString,
    startTime: 1633650252,
    length: 47,
  },
  nadia: { url: 'peer-ec1.decentraland.org' },
  test: {
    link: 'videos/OliverResumeBPMTest.mp4',
    subs: subtitleString2,
    startTime: 1633650252,
    length: 15,
  },
}
