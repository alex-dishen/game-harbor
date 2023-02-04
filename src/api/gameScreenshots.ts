import getData from 'api/api';
import { ResponseSchema, IScreenshots } from 'api/interfaces';

function getGameScreenshots(id: number) {
  return getData<ResponseSchema<IScreenshots>>(`games/${id}/screenshots`);
}

export default getGameScreenshots;
