import getData from 'api/api';
import { IGame } from './interfaces';

const getGameDetails = (id: number) => getData<IGame>(`games/${id}`);

export default getGameDetails;
