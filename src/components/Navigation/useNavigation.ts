import { PATHS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsOpenCart } from 'redux/harborSlice';
import { RootState } from 'redux/types';

export const useNavigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const inCartGames = useSelector(
    (state: RootState) => state.games.inCartGames
  );

  const isAddGamePage = location.pathname === PATHS.addGame;

  const openCart = () => {
    dispatch(setIsOpenCart(true));
    document.body.style.overflow = 'hidden';
  };

  return { isAddGamePage, inCartGames, openCart };
};
