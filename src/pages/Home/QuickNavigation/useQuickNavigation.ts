import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesList } from 'api/gameData';
import {
  setCurrentFilter,
  setGameID,
  setGames,
  setIsSearching,
} from 'redux/counterSlice';
import { handleFilterClick, returnGames } from 'helpers';
import { RootState } from 'redux/types';

const useQuickNavigation = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.harbor.games);

  const getRandomID = async () => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await getGamesList({
      page: randomPage,
      page_size: 40,
      ordering: '-added',
    });
    const results = await returnGames({ games: response });
    if (!results) return;
    dispatch(setGames(results));
    const IDs = results.map((result) => result.id);
    const randomIndex = Math.floor(Math.random() * 40);
    return IDs[randomIndex];
  };

  const setRandomGame = async () => {
    const randomID = await getRandomID();
    if (randomID) dispatch(setGameID(randomID));
    dispatch(setCurrentFilter(''));
    dispatch(setIsSearching(true));
  };

  const handleOnClick = (e: MouseEvent<HTMLElement>, name: string) => {
    handleFilterClick({ e, dispatch, games });
    if (name !== 'Play Dice') return;
    setRandomGame();
  };

  return { handleOnClick };
};

export default useQuickNavigation;
