import { useDispatch, useSelector } from 'react-redux';
import { setGameID, setGames, setInCartGames } from 'redux/counterSlice';
import { RootState } from 'redux/types';

const useGameList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.harbor.games);

  const handleAddToCart = (gameId: number) => {
    const updatedGames = games.map((game) => {
      if (game.id === gameId) {
        return { ...game, isInCart: true };
      }
      return game;
    });

    dispatch(setGames(updatedGames));

    const inCartGames = updatedGames.filter((game) => game.isInCart);
    dispatch(setInCartGames(inCartGames));
  };

  const handleNavigation = (gameID: number) => {
    dispatch(setGameID(gameID));
  };

  return {
    games,
    handleAddToCart,
    handleNavigation,
  };
};

export default useGameList;
