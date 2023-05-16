import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/types';

const usePrice = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const [gamePrice, setGamePrice] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  const { gameID, games } = reduxStore;

  const getGamePrice = () => {
    const currentGame = games.filter((game) => game.id === gameID);

    if (currentGame.length === 0) return 0;

    setGamePrice(currentGame[0].price);
  };

  const returnIsGameInCart = () => {
    const currentGame = games.filter((game) => game.id === gameID);

    if (currentGame.length === 0) return false;

    setIsInCart(currentGame[0].isInCart);
  };

  useEffect(() => {
    getGamePrice();
    returnIsGameInCart();
  }, [games]);

  return {
    games,
    gameID,
    gamePrice,
    isInCart,
    dispatch,
  };
};

export default usePrice;
