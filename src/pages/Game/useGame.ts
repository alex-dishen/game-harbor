import { useDispatch, useSelector } from 'react-redux';
import { getGameDetails, getGameScreenshots } from 'api/gameData';
import { setGameScreenshots, setGameSpecification } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { useEffect } from 'react';
import { gameSpecification } from 'redux/constants';

const useGame = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { gameID } = reduxStore;

  const cleanGamePage = () => {
    dispatch(setGameSpecification(gameSpecification));
    dispatch(setGameScreenshots({ results: [{ id: 0, image: '' }] }));
  };

  const setGameDetails = async () => {
    const details = await getGameDetails(gameID);
    const screenshots = await getGameScreenshots(gameID);
    dispatch(setGameSpecification(details));
    dispatch(setGameScreenshots(screenshots));
  };

  useEffect(() => {
    cleanGamePage();
    setGameDetails();
  }, []);
};

export default useGame;
