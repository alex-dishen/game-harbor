import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/types';

const usePrice = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { gameID, games } = reduxStore;

  const returnGamePrice = () => {
    const currentGame = games.filter((game) => game.id === gameID);

    return currentGame[0].price;
  };

  const returnIsGameInCart = () => {
    const currentGame = games.filter((game) => game.id === gameID);

    return currentGame[0].isInCart;
  };

  return {
    games,
    gameID,
    gamePrice: returnGamePrice(),
    isInCart: returnIsGameInCart(),
    dispatch,
  };
};

export default usePrice;
