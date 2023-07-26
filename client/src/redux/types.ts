import { PayloadAction } from '@reduxjs/toolkit'
import { store } from 'redux/store'
import { GameTypes, ResponseSchema, ScreenshotsTypes } from 'api/types'
import { OptionsT } from 'types'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface HarborState {
  orderTitle: string
  isOpenCart: boolean
  isSearching: boolean
  currentFilter: string
  isHideSidebar: boolean
  isChangeSidebar: boolean
  isOpenSearchGames: boolean
}

export type AddGameState = {
  isError: boolean
  genres: OptionsT[]
  platforms: OptionsT[]
  publishers: OptionsT[]
  developers: OptionsT[]
  responseMessage: string
  selectedGenres: OptionsT[]
  selectedPlatforms: OptionsT[]
  selectedPublishers: OptionsT[]
  selectedDevelopers: OptionsT[]
}

export type GamesState = {
  games: GameTypes[]
  searchedGames: GameTypes[]
  inCartGames: GameTypes[]
  gameSpecification: GameTypes
  gameScreenshots: ResponseSchema<ScreenshotsTypes>
}

export type ActionT = PayloadAction<OptionsT[]>
