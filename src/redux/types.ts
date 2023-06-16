import { GameTypes, ResponseSchema, ScreenshotsTypes } from 'api/types';
import { OptionsT } from 'pages/AddGame/SelectionModal/types';
import { store } from 'redux/store';

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
  selectedPlatforms: OptionsT[];
  selectedGenres: OptionsT[];
}
