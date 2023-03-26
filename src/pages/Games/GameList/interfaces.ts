import { IGame } from 'api/interfaces';

export interface IGameListWrapper {
  games: IGame[];
}

export interface IAddToCart {
  isInCart: boolean;
}
