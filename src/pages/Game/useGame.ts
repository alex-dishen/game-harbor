import { useDispatch, useSelector } from 'react-redux';
import { getGameDetails, getGameScreenshots } from 'api/gameData';
import { setGameScreenshots, setGameSpecification } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { useCallback, useEffect } from 'react';
import { gameSpecification } from 'redux/constants';

const useGame = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { gameID } = reduxStore;

  const cleanGamePage = useCallback(() => {
    dispatch(setGameSpecification(gameSpecification));
    dispatch(setGameScreenshots({ results: [{ id: 0, image: '' }] }));
  }, [dispatch]);

  const setGameDetails = useCallback(async () => {
    const details = await getGameDetails(gameID);
    const screenshots = await getGameScreenshots(gameID);
    dispatch(setGameSpecification(details));
    dispatch(setGameScreenshots(screenshots));
  }, [dispatch, gameID]);

  useEffect(() => {
    cleanGamePage();
    setGameDetails();
  }, [cleanGamePage, setGameDetails]);
};

export default useGame;
