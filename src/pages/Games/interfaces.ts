import { IGame } from 'api/interfaces';

export interface IStyledGamePage {
  games: IGame[] | undefined;
}

export interface IUseGames {
  currentFilter: string;
  setCurrentFilter: (a: string) => void;
  setGames: (a: IGame[]) => void;
}
