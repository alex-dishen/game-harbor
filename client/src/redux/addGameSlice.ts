import { createSlice } from '@reduxjs/toolkit'
import { AddGameState, ActionT } from 'redux/types'

const initialState: AddGameState = {
  platforms: [],
  genres: [],
  publishers: [],
  developers: [],
  selectedPlatforms: [],
  selectedGenres: [],
  selectedPublishers: [],
  selectedDevelopers: [],
}

export const addGameSlice = createSlice({
  name: 'addGame',
  initialState,
  reducers: {
    setPlatforms: (state, action: ActionT) => {
      state.platforms = action.payload
    },
    setGenres: (state, action: ActionT) => {
      state.genres = action.payload
    },
    setPublishers: (state, action: ActionT) => {
      state.publishers = action.payload
    },
    setDevelopers: (state, action: ActionT) => {
      state.developers = action.payload
    },
    setSelectedPlatforms: (state, action: ActionT) => {
      state.selectedPlatforms = action.payload
    },
    setSelectedGenres: (state, action: ActionT) => {
      state.selectedGenres = action.payload
    },
  },
})

export const {
  setPlatforms,
  setGenres,
  setPublishers,
  setDevelopers,
  setSelectedPlatforms,
  setSelectedGenres,
} = addGameSlice.actions

export default addGameSlice.reducer
