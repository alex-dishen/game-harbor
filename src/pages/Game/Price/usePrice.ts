import { useSelector } from 'react-redux';
import { RootState } from 'redux/types';

const usePrice = () => {
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const { gameID, games } = reduxStore;

  const returnGamePrice = () => {
    const currentGame = games.filter((game) => game.id === gameID);

    return currentGame[0].price;
  };

  return { returnGamePrice };
};

export default usePrice;
