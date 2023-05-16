import { IGame } from 'api/interfaces';

export type GameListWrapperTypes = {
  games: IGame[];
};

export type AddToCartTypes = {
  isInCart: boolean;
};
