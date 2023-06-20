import { PayloadAction } from '@reduxjs/toolkit'
import { store } from 'redux/store'
import { GameTypes, ResponseSchema, ScreenshotsTypes } from 'api/types'
import { OptionsT } from 'types'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface HarborState {
  currentFilter: string
  isChangeSidebar: boolean
  isHideSidebar: boolean
  orderTitle: string
  isOpenCart: boolean
  isOpenSearchGames: boolean
  isSearching: boolean
}

export type AddGameState = {
  platforms: OptionsT[]
  genres: OptionsT[]
  publishers: OptionsT[]
  developers: OptionsT[]
  selectedPlatforms: OptionsT[]
  selectedGenres: OptionsT[]
  selectedPublishers: OptionsT[]
  selectedDevelopers: OptionsT[]
}

export type GamesState = {
  games: GameTypes[]
  searchedGames: GameTypes[]
  inCartGames: GameTypes[]
  gameID: number
  gameSpecification: GameTypes
  gameScreenshots: ResponseSchema<ScreenshotsTypes>
}

export type ActionT = PayloadAction<OptionsT[]>
