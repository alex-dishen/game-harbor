import { IGame, ResponseSchema, IScreenshots } from 'api/interfaces';
import { store } from 'redux/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface CounterState {
  currentFilter: string;
  isChangeSidebar: boolean;
  isHideSidebar: boolean;
  orderTitle: string;
  games: IGame[];
  searchedGames: IGame[];
  inCartGames: IGame[];
  isOpenCart: boolean;
  gameID: number;
  gameSpecification: IGame;
  gameScreenshots: ResponseSchema<IScreenshots>;
  isOpenSearchGames: boolean;
  isSearching: boolean;
}