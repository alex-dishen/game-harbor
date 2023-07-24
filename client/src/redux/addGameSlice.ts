import { createSlice } from '@reduxjs/toolkit'
import { AddGameState, ActionT } from 'redux/types'

const initialState: AddGameState = {
  genres: [],
  platforms: [],
  publishers: [],
  developers: [],
  isError: false,
  selectedGenres: [],
  responseMessage: '',
  selectedPlatforms: [],
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
    setResponseMessage: (state, action) => {
      state.responseMessage = action.payload
    },
    setIsError: (state, action) => {
      state.isError = action.payload
    },
  },
})

export const {
  setGenres,
  setIsError,
  setPlatforms,
  setPublishers,
  setDevelopers,
  setSelectedGenres,
  setResponseMessage,
  setSelectedPlatforms,
} = addGameSlice.actions

export default addGameSlice.reducer
