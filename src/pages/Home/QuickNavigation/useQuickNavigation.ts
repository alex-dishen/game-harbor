import { useDispatch } from 'react-redux';
import { getGamesList } from 'api/gameData';
import { setGameID } from 'redux/counterSlice';

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

  const setRandomGame = async (name: string) => {
    if (name !== 'Play Dice') return;
    const randomID = await getRandomID();
    if (randomID) dispatch(setGameID(randomID));
  };

  return { dispatch, setRandomGame };
};

export default useQuickNavigation;
