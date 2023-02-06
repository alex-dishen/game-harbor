import { IGame, IGetGamesList, ResponseSchema } from 'api/interfaces';
import getData from 'api/api';

const getGamesList = (params?: IGetGamesList) =>
  getData<ResponseSchema<IGame>>('games', params as Record<string, string>);

export default getGamesList;
