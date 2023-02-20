import { MouseEvent } from 'react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setCurrentFilter, setGames } from 'redux/counterSlice';
import { gameSpecification } from 'redux/constants';

export const handleFilterClick = (
  e: MouseEvent<HTMLElement>,
  dispatch: Dispatch<AnyAction>,
  currentFilter?: string
) => {
  const target = e.target as HTMLElement;
  const { textContent } = target;

  // games are set to a predefined array in order to display a spinner when
  // refetching data instead of just unexpected screen update
  if (textContent !== currentFilter) dispatch(setGames([gameSpecification]));
  if (textContent) dispatch(setCurrentFilter(textContent));
};
