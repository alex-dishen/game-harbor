import { configureStore } from '@reduxjs/toolkit';
import harborReducer from 'redux/harborSlice';
import addGameReducer from 'redux/addGameSlice';
import gamesReducer from 'redux/gamesSlice';

export const store = configureStore({
  reducer: {
    harbor: harborReducer,
    addGame: addGameReducer,
    games: gamesReducer,
  },
});
