import getData from 'api/api';
import {
  IGame,
  IGetGamesList,
  ResponseSchema,
  IScreenshots,
} from 'api/interfaces';

export const getGamesList = (params?: IGetGamesList) =>
  getData<ResponseSchema<IGame>>('games', params as Record<string, string>);

export const getGameDetails = (id: number) => getData<IGame>(`games/${id}`);

export const getGameScreenshots = (id: number) =>
  getData<ResponseSchema<IScreenshots>>(`games/${id}/screenshots`);
