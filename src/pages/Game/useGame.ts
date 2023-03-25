import { useDispatch, useSelector } from 'react-redux';
import { getGameDetails, getGameScreenshots } from 'api/gameData';
import { setGameScreenshots, setGameSpecification } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { useEffect } from 'react';

const useGame = () => {
  const dispatch = useDispatch();
  const gameID = useSelector((state: RootState) => state.harbor.gameID);

  const setGameDetails = async () => {
    const details = await getGameDetails(gameID);
    const screenshots = await getGameScreenshots(gameID);
    dispatch(setGameSpecification(details));
    dispatch(setGameScreenshots(screenshots));
  };

  useEffect(() => {
    setGameDetails();
  }, []);
};

export default useGame;
