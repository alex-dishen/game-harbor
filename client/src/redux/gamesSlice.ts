import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GameTypes, ResponseSchema, ScreenshotsTypes } from 'api/types'
import { GamesState } from 'redux/types'
import { saveToLocalStorage } from 'redux/helpers'
import { gameSpecification } from '../constants'

const currentGamesInCart =
  (JSON.parse(localStorage.getItem('inCartGames') as string) as GameTypes[]) ||
  []

const initialState: GamesState = {
  games: [],
  searchedGames: [],
  inCartGames: currentGamesInCart,
  gameSpecification,
  gameScreenshots: { results: [{ id: 0, image: '' }] },
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.games = action.payload
    },
    setSearchedGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.searchedGames = action.payload
    },
    setInCartGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.inCartGames = action.payload
      saveToLocalStorage('inCartGames', state.inCartGames)
    },
    setGameSpecification: (state, action: PayloadAction<GameTypes>) => {
      state.gameSpecification = action.payload
    },
    setGameScreenshots: (
      state,
      action: PayloadAction<ResponseSchema<ScreenshotsTypes>>,
    ) => {
      state.gameScreenshots = action.payload
    },
  },
})

export const {
  setGames,
  setSearchedGames,
  setInCartGames,
  setGameSpecification,
  setGameScreenshots,
} = gamesSlice.actions

export default gamesSlice.reducer
