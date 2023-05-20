import { useDispatch, useSelector } from 'react-redux';
import { setGameID } from 'redux/counterSlice';
import { RootState } from 'redux/types';

const useGameList = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { games, inCartGames } = reduxStore;

  const handleNavigation = (gameID: number) => {
    dispatch(setGameID(gameID));
  };

  return {
    games,
    inCartGames,
    dispatch,
    handleNavigation,
  };
};

export default useGameList;
