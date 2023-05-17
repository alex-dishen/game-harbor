import { GameTypes, ResponseSchema } from 'api/types';

export type LoadGamesTypes = {
  games?: ResponseSchema<GameTypes>;
  inCartGames: GameTypes[];
  getGames?: () => Promise<ResponseSchema<GameTypes>>;
};
