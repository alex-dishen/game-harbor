import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames, setInCartGames, setIsOpenCart } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { useClickOutside } from 'utils/customHooks';

const useCart = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const cartRef = useRef<HTMLDivElement>(null);

  const { isOpenCart, inCartGames, games } = reduxStore;

  const returnGamesPriceSum = () => {
    const gamesPrices = inCartGames.map((game) => game.price);

    if (gamesPrices.length === 0) return 0;
    const totalPrice = gamesPrices
      .reduce((accumulator, currentValue) => accumulator + currentValue)
      .toFixed(2);

    return totalPrice;
  };

  const hideCart = () => {
    dispatch(setIsOpenCart(false));
  };

  const clearInCartGames = () => {
    const updatedGames = games.map((game) => {
      if (game.isInCart) {
        return { ...game, isInCart: false };
      }

      return game;
    });

    dispatch(setInCartGames([]));
    dispatch(setGames(updatedGames));
  };

  const deleteGame = (gameID: number) => {
    const updatedInCartGames = inCartGames.map((game) => {
      if (game.id === gameID) {
        return { ...game, isInCart: false };
      }

      return game;
    });

    const filteredGames = updatedInCartGames.filter((game) => game.isInCart);

    const updatedGames = games.map((game) => {
      if (game.id === gameID) {
        return { ...game, isInCart: false };
      }

      return game;
    });

    dispatch(setInCartGames(filteredGames));
    dispatch(setGames(updatedGames));
  };

  useClickOutside(isOpenCart, cartRef, hideCart);

  return {
    cartRef,
    inCartGames,
    clearInCartGames,
    deleteGame,
    returnGamesPriceSum,
  };
};

export default useCart;
