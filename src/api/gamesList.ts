import { IGame, IGetGamesList } from 'api/interfaces';
import getData, { ResponseSchema } from 'api/api';

const getGamesList = (params?: IGetGamesList) =>
  getData<ResponseSchema<IGame>>('games', params as Record<string, string>);

export default getGamesList;
