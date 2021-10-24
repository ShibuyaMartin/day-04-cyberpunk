import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { signedFetch } from '@decentraland/SignedFetch'
import { Crate } from './crate'

import { playerRealm, setRealm, setUserData, userData } from './userData'

export let rewardsServer = 'https://rewards.decentraland.org/'

export enum campaigns {
  // diver helmet
  campaign1 = '8a3167f8-3f0e-4cb5-8b25-34c3a2052095',
  // alien stuff
  campaign2 = 'a6795383-b235-42d6-a9cf-ddf4bb7bb330',
  // festival cap
  campaign3 = '45c2df86-2587-41ff-b62c-3b001d7ce392',
  // frog / sun glasses
  campaign4 = 'c2373636-a1df-4f2e-ab76-cb20341c4134',
  // galaxy stuff
  campaign5 = '994cf005-03a7-4bd1-85ce-74e5bdacfc96',
  // day 4 tshirt
  campaign6 = 'c6c8d803-0140-4907-906e-d97f3a9813b1',
  // cool masks
  campaign7 = '3be316c9-fb4a-4b86-8172-4b2cdb3ec2f1',
  // fewo
  campaign8 = 'e7b21a92-2d6c-4c5c-97d1-6daaaf7fd19b',
}

export enum campaign_keys {
  crate1 = 'eyJpZCI6IjkxNDdmYzhhLWY5NDAtNGZjYi05M2MwLTI4YWRlMTY4NzYyNSIsImNhbXBhaWduX2lkIjoiOGEzMTY3ZjgtM2YwZS00Y2I1LThiMjUtMzRjM2EyMDUyMDk1In0=.UTa2DPG00SQefIQr5rczKW-WJWB3TCX8IorElah/gCk=',
  crate2 = 'eyJpZCI6ImVjZWUxZTY3LTdlMzMtNDU1NC1hN2Q5LWViMTk3NDk2YjJhMCIsImNhbXBhaWduX2lkIjoiYTY3OTUzODMtYjIzNS00MmQ2LWE5Y2YtZGRmNGJiN2JiMzMwIn0=.uoKubVJIyyDl0I7N19dKZ8hVKH9DJ9OJgzJ71rWXpDY=',
  crate3 = 'eyJpZCI6IjFlMmMzNDY1LTZkZGItNDhlZi05YTBiLTBjNmQ3NGEzYjRiOSIsImNhbXBhaWduX2lkIjoiNDVjMmRmODYtMjU4Ny00MWZmLWI2MmMtM2IwMDFkN2NlMzkyIn0=.EFGUkAu-gBItqQs8HbmPGLMusGamlDutGRI0Rvt44dM=',
  crate4 = 'eyJpZCI6IjdjM2UzODVlLTg1YmYtNDlmZS05YWI3LWM1OWU3OWM0OWFkYyIsImNhbXBhaWduX2lkIjoiYzIzNzM2MzYtYTFkZi00ZjJlLWFiNzYtY2IyMDM0MWM0MTM0In0=.ATbivt-Y9azaqz3DU3mp3lejan3HD5l2eb0nieBxnLI=',
  crate5 = 'eyJpZCI6IjkyMzBkNGQ4LWM3NTItNDMzNS1iZDkyLThlODQzNjEwZWFjOSIsImNhbXBhaWduX2lkIjoiOTk0Y2YwMDUtMDNhNy00YmQxLTg1Y2UtNzRlNWJkYWNmYzk2In0=.KEdIOE2/BudHK-tTLthoUZNJOzrAosE3XksppvyscvQ=',
  crate6 = 'eyJpZCI6ImQ3NDdiOWRhLWRhOTAtNGU0MC05ZmI2LWMyZGY3ZjI5NTBmMyIsImNhbXBhaWduX2lkIjoiYzZjOGQ4MDMtMDE0MC00OTA3LTkwNmUtZDk3ZjNhOTgxM2IxIn0=.rD1rwXRp1i89l0Ba3bioij/6s35PkJtmfgBQEO/NDio=',
  crate7 = 'eyJpZCI6ImFjNDQ4NmY2LWE2MGMtNDQ5Yy05ZWY4LTNlNjMzMWEzODRjNCIsImNhbXBhaWduX2lkIjoiM2JlMzE2YzktZmI0YS00Yjg2LTgxNzItNGIyY2RiM2VjMmYxIn0=.1uMUHWAiL4cXH-WBD94je5exJjl0-wwgHeJRw/lMzrQ=',
  crate8 = 'eyJpZCI6ImIyMjQyNDg2LTViZjItNGJhZC05MzhlLTBlYTAyYTA2MjRlMSIsImNhbXBhaWduX2lkIjoiZTdiMjFhOTItMmQ2Yy00YzVjLTk3ZDEtNmRhYWFmN2ZkMTliIn0=.OmZWqdg/xKGxrWWaqhO/S9bG1rIDsL1lxoAhp6zW5YU=',
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
