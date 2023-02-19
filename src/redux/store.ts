import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'redux/counterSlice';

export const store = configureStore({
  reducer: {
    harbor: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
