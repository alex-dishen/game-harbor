import { Dispatch } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { GameTypes, RAWGResponseT, ResponseSchema } from 'api/types'

export type LoadGamesTypes = {
  games?: ResponseSchema<RAWGResponseT>
  inCartGames: GameTypes[]
  getGames?: () => Promise<ResponseSchema<RAWGResponseT>>
}

export type OptionsT = {
  id: string
  name: string
  icon?: JSX.Element
  slug?: string
}

export type HandleAddToCartTypes = {
  gameID: number | string
  games: GameTypes[]
  inCartGames: GameTypes[]
  dispatch: Dispatch<AnyAction>
}

export type ResponseT = {
  status: number
  data: GameTypes[]
  response: { status: number; data: string }
}
