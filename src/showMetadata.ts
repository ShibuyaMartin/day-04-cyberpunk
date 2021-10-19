import { subtitleString } from './subtitle-files/BPMtoSubs1'
import { subtitleString2 } from './subtitle-files/OliverDemoMerged2'
import { MiyaSubs } from './subtitle-files/MergeBPM_MIYA_MIYA'
import { ParisSubs } from './subtitle-files/Paris'

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
  ParisSubs,
]

export let FAKING_LOCALLY: boolean = true

export const shows: any = {
  deadmau5: {
    link: `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`,
    subs: subtitleString,
    startTime: 1633650252,
    length: 47,
  },
  paris: {
    link: 'videos/paris.mp4',
    startTime: 1634489392,
    length: 7 * 60,
  },
  test: {
    link: 'videos/OliverResumeBPMTest.mp4',
    subs: subtitleString2,
    startTime: 1633650252,
    length: 15,
  },
}
