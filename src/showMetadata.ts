import { AkiraSubs } from './subtitle-files/mergeAkira'
import { CodySubs } from './subtitle-files/mergeCody'
import { FuzeSubs } from './subtitle-files/mergeFuze'
import { HarrisonSubs } from './subtitle-files/mergeHarrison'
import { SpottieSubs } from './subtitle-files/mergeSpottie'
import { ParisSubs } from './subtitle-files/Paris'

export type showType = {
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export const subtitlesList = [
  CodySubs,
  HarrisonSubs,
  AkiraSubs,
  SpottieSubs,
  FuzeSubs,
  ParisSubs,
]

export type adType = {
  link: string
  enabled: boolean
}

export let FAKING_LOCALLY: boolean = true

export const shows: any = {
  deadmau5: {
    link: `https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7`,
    subs: FuzeSubs,
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
    subs: SpottieSubs,
    startTime: 1633650252,
    length: 15,
  },
}
