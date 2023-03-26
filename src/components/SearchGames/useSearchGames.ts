import { useDispatch, useSelector } from 'react-redux';
import { setGameID, setGames, setIsOpenSearchGames } from 'redux/counterSlice';
import { RootState } from 'redux/types';

const useSearchGames = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);

  const { searchedGames } = reduxState;

  const games = searchedGames.slice(0, 8);

  const handleOnClick = (gameID: number) => {
    dispatch(setGameID(gameID));
    dispatch(setIsOpenSearchGames(false));
    dispatch(setGames(searchedGames));
  };

  return { games, handleOnClick };
};

export default useSearchGames;
