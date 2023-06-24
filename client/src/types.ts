import { Dispatch } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { GameTypes, ResponseSchema } from 'api/types'

export type LoadGamesTypes = {
  games?: ResponseSchema<GameTypes>
  inCartGames: GameTypes[]
  getGames?: () => Promise<ResponseSchema<GameTypes>>
}

export type OptionsT = {
  key: string
  name: string
  icon?: JSX.Element
}

export type HandleAddToCartTypes = {
  gameID: number
  games: GameTypes[]
  inCartGames: GameTypes[]
  dispatch: Dispatch<AnyAction>
}
