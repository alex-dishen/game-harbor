import { store } from 'redux/store';
import { GameTypes, ResponseSchema, ScreenshotsTypes } from 'api/types';
import { OptionsT } from 'types';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface CounterState {
  currentFilter: string;
  isChangeSidebar: boolean;
  isHideSidebar: boolean;
  orderTitle: string;
  games: GameTypes[];
  searchedGames: GameTypes[];
  inCartGames: GameTypes[];
  isOpenCart: boolean;
  gameID: number;
  gameSpecification: GameTypes;
  gameScreenshots: ResponseSchema<ScreenshotsTypes>;
  isOpenSearchGames: boolean;
  isSearching: boolean;
  platforms: OptionsT[];
  genres: OptionsT[];
  publishers: OptionsT[];
  developers: OptionsT[];
  selectedPlatforms: OptionsT[];
  selectedGenres: OptionsT[];
  selectedPublishers: OptionsT[];
  selectedDevelopers: OptionsT[];
}
