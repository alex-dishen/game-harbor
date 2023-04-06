import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from 'redux/types';
import { IGame, IScreenshots, ResponseSchema } from 'api/interfaces';
import { gameSpecification } from 'redux/constants';

const saveToLocalStorage = (name: string, item: string | number) =>
  localStorage.setItem(name, JSON.stringify(item));

const currentFilter =
  (JSON.parse(localStorage.getItem('currentFilter') as string) as string) || '';

const currentGameID =
  (JSON.parse(localStorage.getItem('currentGameID') as string) as number) || 0;

const initialState: CounterState = {
  currentFilter: currentFilter,
  isChangeSidebar: false,
  isHideSidebar: false,
  orderTitle: 'Popularity',
  isOpenCart: false,
  games: [],
  searchedGames: [],
  inCartGames: [],
  gameID: currentGameID,
  gameSpecification,
  gameScreenshots: { results: [{ id: 0, image: '' }] },
  isOpenSearchGames: false,
  isSearching: false,
};

export const counterSlice = createSlice({
  name: 'harbor',
  initialState,
  reducers: {
    setCurrentFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
      saveToLocalStorage('currentFilter', state.currentFilter);
    },
    setIsChangeSidebar: (state, action: PayloadAction<boolean>) => {
      state.isChangeSidebar = action.payload;
    },
    setIsHideSidebar: (state, action: PayloadAction<boolean>) => {
      state.isHideSidebar = action.payload;
    },
    setOrderTitle: (state, action: PayloadAction<string>) => {
      state.orderTitle = action.payload;
    },
    setGames: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
    setSearchedGames: (state, action: PayloadAction<IGame[]>) => {
      state.searchedGames = action.payload;
    },
    setInCartGames: (state, action: PayloadAction<IGame[]>) => {
      state.inCartGames = action.payload;
    },
    setIsOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
    setGameID: (state, action: PayloadAction<number>) => {
      state.gameID = action.payload;
      saveToLocalStorage('currentGameID', state.gameID);
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
    setIsOpenSearchGames: (state, action: PayloadAction<boolean>) => {
      state.isOpenSearchGames = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
});

export const {
  setCurrentFilter,
  setIsChangeSidebar,
  setIsHideSidebar,
  setOrderTitle,
  setGames,
  setSearchedGames,
  setInCartGames,
  setIsOpenCart,
  setGameID,
  setGameSpecification,
  setGameScreenshots,
  setIsOpenSearchGames,
  setIsSearching,
} = counterSlice.actions;

export default counterSlice.reducer;