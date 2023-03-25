import { MouseEvent } from 'react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setCurrentFilter, setGames } from 'redux/counterSlice';
import { gameSpecification } from 'redux/constants';
import { IGame, ResponseSchema } from 'api/interfaces';
import { getPrice } from 'pages/Games/helpers';

export const handleFilterClick = (
  e: MouseEvent<HTMLElement>,
  dispatch: Dispatch<AnyAction>,
  currentFilter?: string,
  location?: string
) => {
  const target = e.target as HTMLElement;
  const { textContent } = target;

  // games are set to a predefined array in order to display a spinner when
  // refetching data instead of just unexpected screen update
  if (textContent !== currentFilter && location === '/games')
    dispatch(setGames([gameSpecification]));
  if (textContent) dispatch(setCurrentFilter(textContent));
};

interface ILoadGames {
  getGames?: () => Promise<ResponseSchema<IGame>>;
  games?: ResponseSchema<IGame>;
}

export const returnGames = async ({ getGames, games }: ILoadGames) => {
  const response = getGames ? await getGames() : games;
  if (!response) return;
  const { results } = response;
  results.forEach((game) => (game.price = getPrice(game)));
  return results;
};
