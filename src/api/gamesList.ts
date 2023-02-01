import { GameTypes } from '../utils/Game.types';
import getData, { ResponseSchema } from './api';

interface Params {
  page?: number;
  page_size?: number;
  search?: string;
  dates?: string;
  ordering?: string;
  platforms?: number;
}

const getGamesList = (params?: Params) =>
  getData<ResponseSchema<GameTypes>>('games', params as Record<string, string>);

export default getGamesList;
