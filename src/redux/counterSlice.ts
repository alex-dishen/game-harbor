import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from 'redux/types';
import { GameTypes, ScreenshotsTypes, ResponseSchema } from 'api/types';
import { gameSpecification } from 'redux/constants';
import { OptionsT } from 'pages/AddGame/SelectionModal/types';

const saveToLocalStorage = (
  name: string,
  item: string | number | GameTypes[]
) => localStorage.setItem(name, JSON.stringify(item));

const currentFilter =
  (JSON.parse(localStorage.getItem('currentFilter') as string) as string) || '';

const currentGameID =
  (JSON.parse(localStorage.getItem('currentGameID') as string) as number) || 0;

const currentGamesInCart =
  (JSON.parse(localStorage.getItem('inCartGames') as string) as GameTypes[]) ||
  [];

const initialState: CounterState = {
  currentFilter: currentFilter,
  isChangeSidebar: false,
  isHideSidebar: false,
  orderTitle: 'Popularity',
  isOpenCart: false,
  games: [],
  searchedGames: [],
  inCartGames: currentGamesInCart,
  gameID: currentGameID,
  gameSpecification,
  gameScreenshots: { results: [{ id: 0, image: '' }] },
  isOpenSearchGames: false,
  isSearching: false,
  platforms: [],
  genres: [],
  publishers: [],
  developers: [],
  selectedPlatforms: [],
  selectedGenres: [],
  selectedPublishers: [],
  selectedDevelopers: [],
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
    setGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.games = action.payload;
    },
    setSearchedGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.searchedGames = action.payload;
    },
    setInCartGames: (state, action: PayloadAction<GameTypes[]>) => {
      state.inCartGames = action.payload;
      saveToLocalStorage('inCartGames', state.inCartGames);
    },
    setIsOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
    setGameID: (state, action: PayloadAction<number>) => {
      state.gameID = action.payload;
      saveToLocalStorage('currentGameID', state.gameID);
    },
    setGameSpecification: (state, action: PayloadAction<GameTypes>) => {
      state.gameSpecification = action.payload;
    },
    setGameScreenshots: (
      state,
      action: PayloadAction<ResponseSchema<ScreenshotsTypes>>
    ) => {
      state.gameScreenshots = action.payload;
    },
    setIsOpenSearchGames: (state, action: PayloadAction<boolean>) => {
      state.isOpenSearchGames = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    setPlatforms: (state, action: PayloadAction<OptionsT[]>) => {
      state.platforms = action.payload;
    },
    setGenres: (state, action: PayloadAction<OptionsT[]>) => {
      state.genres = action.payload;
    },
    setPublishers: (state, action: PayloadAction<OptionsT[]>) => {
      state.publishers = action.payload;
    },
    setDevelopers: (state, action: PayloadAction<OptionsT[]>) => {
      state.developers = action.payload;
    },
    setSelectedPlatforms: (state, action: PayloadAction<OptionsT[]>) => {
      state.selectedPlatforms = action.payload;
    },
    setSelectedGenres: (state, action: PayloadAction<OptionsT[]>) => {
      state.selectedGenres = action.payload;
    },
    setSelectedPublishers: (state, action: PayloadAction<OptionsT[]>) => {
      state.selectedPublishers = action.payload;
    },
    setSelectedDevelopers: (state, action: PayloadAction<OptionsT[]>) => {
      state.selectedDevelopers = action.payload;
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
  setPlatforms,
  setGenres,
  setPublishers,
  setDevelopers,
  setSelectedPlatforms,
  setSelectedGenres,
  setSelectedPublishers,
  setSelectedDevelopers,
} = counterSlice.actions;

export default counterSlice.reducer;
