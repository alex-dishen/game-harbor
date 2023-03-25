import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { getGamesList } from 'api/gameData';
import { setGameID } from 'redux/counterSlice';
import { handleFilterClick } from 'utils/helpers';

const useQuickNavigation = () => {
  const dispatch = useDispatch();

  const getRandomID = async () => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await getGamesList({
      page: randomPage,
      page_size: 40,
      ordering: '-added',
    });
    if (!response) return;
    const { results } = response;
    const IDs = results.map((result) => result.id);
    const randomIndex = Math.floor(Math.random() * 40);
    return IDs[randomIndex];
  };

  const setRandomGame = async () => {
    const randomID = await getRandomID();
    if (randomID) dispatch(setGameID(randomID));
  };

  const handleOnClick = (e: MouseEvent<HTMLElement>, name: string) => {
    handleFilterClick(e, dispatch);
    if (name !== 'Play Dice') return;
    setRandomGame();
  };

  return { handleOnClick };
};

export default useQuickNavigation;
