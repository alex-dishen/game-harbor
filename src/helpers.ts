import { MouseEvent } from 'react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setCurrentFilter, setGames, setInCartGames } from 'redux/counterSlice';
import { gameSpecification } from 'redux/constants';
import { IGame, ResponseSchema } from 'api/interfaces';
import { getPrice } from 'pages/Games/helpers';

interface IHandleFilterClick {
  e: MouseEvent<HTMLElement>;
  dispatch: Dispatch<AnyAction>;
  games: IGame[];
  currentFilter?: string;
  location?: string;
}

export const handleFilterClick = ({
  e,
  dispatch,
  currentFilter,
  games,
}: IHandleFilterClick) => {
  const target = e.target as HTMLElement;
  const { textContent } = target;

  // games are set to a predefined array in order to display a spinner when
  // refetching data instead of just unexpected screen update
  if (textContent !== currentFilter && games.length > 0)
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
  const modifiedResults = results.map((game) => ({
    ...game,
    price: getPrice(game),
    isInCart: false,
  }));

  return modifiedResults;
};

export const handleAddToCart = (
  gameId: number,
  games: IGame[],
  dispatch: Dispatch<AnyAction>
) => {
  const updatedGames = games.map((game) => {
    if (game.id === gameId) {
      return { ...game, isInCart: true };
    }

    return game;
  });

  dispatch(setGames(updatedGames));

  const inCartGames = updatedGames.filter((game) => game.isInCart);
  dispatch(setInCartGames(inCartGames));
};
