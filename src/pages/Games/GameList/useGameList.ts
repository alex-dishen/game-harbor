import { useDispatch, useSelector } from 'react-redux';
import { setGameID } from 'redux/counterSlice';
import { RootState } from 'redux/types';

const useGameList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.harbor.games);

  const handleNavigation = (gameID: number) => {
    dispatch(setGameID(gameID));
  };

  return {
    games,
    dispatch,
    handleNavigation,
  };
};

export default useGameList;
