import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGame, IScreenshots, ResponseSchema } from 'api/interfaces';

export interface CounterState {
  currentFilter: string;
  isChangeNavbar: boolean;
  isHideNavbar: boolean;
  orderTitle: string;
  games: IGame[];
  gameID: number;
  gameSpecification: IGame;
  gameScreenshots: ResponseSchema<IScreenshots>;
}

const gameSpecification = {
  id: 0,
  slug: '',
  name: '',
  price: 0,
  ratings_count: 0,
  description_raw: '',
  website: '',
  released: '',
  background_image: '',
  developers: [{ name: '' }],
  publishers: [{ name: '' }],
  parent_platforms: [{ platform: { id: 0, slug: '', name: '' } }],
  platforms: [{ platform: { id: 0, slug: '', name: '' } }],
  genres: [{ name: '' }],
  short_screenshots: [{ id: 0, image: '' }],
};

const initialState: CounterState = {
  currentFilter: '',
  isChangeNavbar: false,
  isHideNavbar: false,
  orderTitle: 'Popularity',
  games: [],
  gameID: 0,
  gameSpecification,
  gameScreenshots: { results: [{ id: 0, image: '' }] },
};

export const counterSlice = createSlice({
  name: 'harbor',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
    setIsChangeNavbar: (state, action: PayloadAction<boolean>) => {
      state.isChangeNavbar = action.payload;
    },
    setIsHideNavbar: (state, action: PayloadAction<boolean>) => {
      state.isHideNavbar = action.payload;
    },
    setOrderTitle: (state, action: PayloadAction<string>) => {
      state.orderTitle = action.payload;
    },
    setGames: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
    setGameID: (state, action: PayloadAction<number>) => {
      state.gameID = action.payload;
    },
    setGameSpecification: (state, action: PayloadAction<IGame>) => {
      state.gameSpecification = action.payload;
    },
    setGameScreenshots: (
      state,
      action: PayloadAction<ResponseSchema<IScreenshots>>
    ) => {
      state.gameScreenshots = action.payload;
    },
  },
});

export const {
  setCurrentFilter,
  setIsChangeNavbar,
  setIsHideNavbar,
  setOrderTitle,
  setGames,
  setGameID,
  setGameSpecification,
  setGameScreenshots,
} = counterSlice.actions;

export default counterSlice.reducer;
