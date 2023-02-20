import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'redux/counterSlice';

export const store = configureStore({
  reducer: {
    harbor: counterReducer,
  },
});
