import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { signedFetch } from '@decentraland/SignedFetch'
import { Crate } from './crate'

import { playerRealm, setRealm, setUserData, userData } from './userData'

export let rewardsServer = 'https://rewards.decentraland.org/'

export enum campaigns {
  campaign1 = '',
  campaign2 = '',
  campaign3 = '',
  campaign4 = '',
  campaign5 = '',
  campaign6 = '',
}

export enum campaign_keys {
  crate1 = '',
  crate2 = '',
  crate3 = '',
  crate4 = '',
  crate5 = '',
  crate6 = '',
}

export enum ChainId {
  ETHEREUM_MAINNET = 1,
  ETHEREUM_ROPSTEN = 3,
  ETHEREUM_RINKEBY = 4,
  ETHEREUM_GOERLI = 5,
  ETHEREUM_KOVAN = 42,
  MATIC_MAINNET = 137,
  MATIC_MUMBAI = 80001,
}

export enum ClaimState {
  ASSIGNED = 'assigned',
  SENDING = 'sending',
  SUCCESS = 'success',
  CONFIRMED = 'confirmed',
  REJECTED = 'rejected',
}

export type RewardData = {
  ok: boolean
  data: ItemData[]
  code?: string
  error?: string
}

export type ItemData = {
  id: string
  user: string
  campaign_id: string
  status: ClaimState
  transaction_hash: string | null
  transaction_id: string | null
  token: string
  value: string
  created_at: string
  updated_at: string
  from_referral: null
  block_number: null
  claim_id: string | null
  target: string
  payload: string | null
  expires_at: string | null
  signature: string | null
  airdrop_type: string
  group: string | null
  priority: string
  campaign_key: string
  assigned_at: string
  image: string
  chain_id: ChainId
}

export async function claimToken(
  campaign: string,
  campaign_key: campaign_keys,
  representation: Crate
) {
  if (!userData) {
    await setUserData()
  }
  if (!playerRealm) {
    await setRealm()
  }

  if (!userData.hasConnectedWeb3) {
    PlayOpenSound()
    let p = new ui.OkPrompt(
      'You need an in-browser Ethereum wallet (eg: Metamask) to claim this item.',
      () => {
        p.close()
        representation.vanish()
        PlayCloseSound()
      },
      'Ok',
      true
    )

    return false
  }

  const url = rewardsServer + 'api/campaigns/' + campaign + '/rewards'
  log('sending req to: ', url)

  let body = JSON.stringify({
    campaign_key: campaign_key,
    catalyst: playerRealm.domain,
    beneficiary: userData.publicKey,
    //beneficiary: '0xe2b6024873d218B2E83B462D3658D8D7C3f55a18',
  })

  try {
    //TODO SIGNED FETCH
    let response = await signedFetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
    log('Reward received: ', response)

    if (!response.text) {
      throw new Error('Invalid response')
    }

    let json: RewardData = await JSON.parse(response.text)
    log('Reward received: ', json)

    let p: ui.OkPrompt

    if (json && !json.ok) {
      PlayOpenSound()
      log('ERROR: ', json.code)
      switch (json.code) {
        case 'beneficiary_invalid':
          p = new ui.OkPrompt(
            'This box was empty',
            () => {
              p.close()
              representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break
        case 'beneficiary_not_connected':
          p = new ui.OkPrompt(
            'This box was empty.',
            () => {
              p.close()
              representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break
        case 'beneficiary_position':
          p = new ui.OkPrompt(
            'This box was empty.',
            () => {
              p.close()
              representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break

        case 'campaign_uninitiated':
          p = new ui.OkPrompt(
            'This campaign has not started yet',
            () => {
              p.close()
              //   representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break

        case 'campaign_finished':
          p = new ui.OkPrompt(
            'This campaign is over',
            () => {
              p.close()
              representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break

        default:
          p = new ui.OkPrompt(
            'This box was empty.',
            () => {
              p.close()
              //   representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break
      }
    }

    if (!json.data[0]) {
      log('no rewards')
      PlayOpenSound()
      p = new ui.OkPrompt(
        'This box was empty.',
        () => {
          p.close()
          PlayCloseSound()
          representation.vanish()
          representation.openUi = false
        },
        'Ok',
        true
      )
    } else {
      switch (json.data[0].status) {
        case ClaimState.ASSIGNED:
          openClaimUI(json.data[0], representation)

          break
        case ClaimState.SENDING:
          openClaimUI(json.data[0], representation)

          break
        case ClaimState.SUCCESS:
          openClaimUI(json.data[0], representation)

          break

        case ClaimState.CONFIRMED:
          openClaimUI(json.data[0], representation)

          break

        case ClaimState.REJECTED:
          log('player not on map')
          PlayOpenSound()
          p = new ui.OkPrompt(
            'This box was empty.',
            () => {
              p.close()
              representation.vanish()
              PlayCloseSound()
            },
            'Ok',
            true
          )
          break

        default:
          //   openClaimUI(json.data[0], representation)
          openClaimUI(json.data[0], representation)
          break
      }
    }
  } catch {
    log('error fetching from token server ', url)

    let p = new ui.OkPrompt(
      'This box was empty.',
      () => {
        p.close()
        //   representation.vanish()
        PlayCloseSound()
      },
      'Ok',
      true
    )

    return null
  }
}

let claimUI: ui.CustomPrompt

let UI_SCALE_MULT = 0.7

export function openClaimUI(data: ItemData, representation: Crate) {
  PlayOpenSound()

  if (claimUI && claimUI.background.visible) {
    claimUI.hide()
  }

  claimUI = new ui.CustomPrompt(
    ui.PromptStyles.DARKLARGE,
    640 * UI_SCALE_MULT,
    512 * UI_SCALE_MULT
  )
  //claimUI = new ui.CustomPrompt('images/WearablePopUp.png', 640, 512)

  let bgTexture = new Texture('images/WearablePopUp.png')

  claimUI.background.sourceWidth = 640
  claimUI.background.sourceHeight = 512
  claimUI.background.sourceTop = 0
  claimUI.background.sourceLeft = 0
  claimUI.background.source = bgTexture

  claimUI.addText(
    data.status == ClaimState.SUCCESS
      ? 'You now own this item!'
      : data.status == ClaimState.SENDING || ClaimState.CONFIRMED
      ? 'This item is on its way!'
      : 'This item will be sent to you soon!',
    0,
    188 * UI_SCALE_MULT,
    Color4.White(),
    30 * UI_SCALE_MULT
  )

  claimUI.addText(
    data.token,
    0,
    118 * UI_SCALE_MULT,
    Color4.White(),
    20 * UI_SCALE_MULT
  ) // wearable name

  claimUI.addIcon(
    data.image,
    0,
    -12 * UI_SCALE_MULT,
    180 * UI_SCALE_MULT,
    180 * UI_SCALE_MULT,
    {
      sourceHeight: 1024,
      sourceWidth: 1024,
      sourceLeft: 0,
      sourceTop: 0,
    }
  )

  let okButton = claimUI.addButton(
    'OK',
    134 * UI_SCALE_MULT,
    -175 * UI_SCALE_MULT,
    () => {
      claimUI.hide()
      PlayCloseSound()
      claimUI.hide()
      representation.vanish()
      representation.openUi = false
    },
    ui.ButtonStyles.E
  )
  //   okButton.image.positionX = -100
  okButton.label.positionX = 30 * UI_SCALE_MULT
  okButton.image.width = 238 * UI_SCALE_MULT
  okButton.image.height = 64 * UI_SCALE_MULT
  if (okButton.icon) {
    okButton.icon.width = 36 * UI_SCALE_MULT
    okButton.icon.height = 36 * UI_SCALE_MULT
  }
  okButton.label.fontSize = 24 * UI_SCALE_MULT

  let txButton = claimUI.addButton(
    'Details',
    -134 * UI_SCALE_MULT,
    -175 * UI_SCALE_MULT,
    () => {
      openExternalURL('https://rewards.decentraland.org/reward/?id=' + data.id)
    },
    ui.ButtonStyles.F
  )
  txButton.image.width = 238 * UI_SCALE_MULT
  txButton.image.height = 64 * UI_SCALE_MULT
  if (txButton.icon) {
    txButton.icon.width = 36 * UI_SCALE_MULT
    txButton.icon.height = 36 * UI_SCALE_MULT
  }
  txButton.label.fontSize = 24 * UI_SCALE_MULT
  txButton.label.positionX = 30 * UI_SCALE_MULT
}

export function openTxLink(chain_id: ChainId, transaction_hash: string) {
  switch (chain_id) {
    case ChainId.ETHEREUM_MAINNET:
      openExternalURL('https://etherscan.io/tx/' + transaction_hash)
      break
    case ChainId.ETHEREUM_ROPSTEN:
      openExternalURL('https://ropsten.etherscan.io/tx/' + transaction_hash)
      break
    case ChainId.MATIC_MAINNET:
      openExternalURL('https://polygonscan.com/tx/' + transaction_hash)
      break
    case ChainId.MATIC_MUMBAI:
      openExternalURL('https://mumbai.polygonscan.com/tx/' + transaction_hash)
      break
  }
}

// Open dialog sound
export const openDialogSound = new Entity()
openDialogSound.addComponent(new Transform())
openDialogSound.addComponent(
  new AudioSource(new AudioClip('sounds/navigationForward.mp3'))
)
openDialogSound.getComponent(AudioSource).volume = 0.5
engine.addEntity(openDialogSound)
openDialogSound.setParent(Attachable.AVATAR)

// Close dialog sound
export const closeDialogSound = new Entity()
closeDialogSound.addComponent(new Transform())
closeDialogSound.addComponent(
  new AudioSource(new AudioClip('sounds/navigationBackward.mp3'))
)
closeDialogSound.getComponent(AudioSource).volume = 0.5
engine.addEntity(closeDialogSound)
closeDialogSound.setParent(Attachable.AVATAR)

export const coinSound = new Entity()
coinSound.addComponent(new Transform())
coinSound.addComponent(
  new AudioSource(new AudioClip('sounds/star-collect.mp3'))
)
coinSound.getComponent(AudioSource).volume = 0.5
coinSound.getComponent(AudioSource).loop = false
engine.addEntity(coinSound)
coinSound.setParent(Attachable.AVATAR)

export function PlayOpenSound() {
  openDialogSound.getComponent(AudioSource).playOnce()
}

export function PlayCloseSound() {
  closeDialogSound.getComponent(AudioSource).playOnce()
}

export function PlayCoinSound() {
  coinSound.getComponent(AudioSource).playOnce()
}
