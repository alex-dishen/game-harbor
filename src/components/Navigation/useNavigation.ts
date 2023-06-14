import { setIsOpenCart } from 'redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/types';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const inCartGames = useSelector(
    (state: RootState) => state.harbor.inCartGames
  );

  const openCart = () => {
    dispatch(setIsOpenCart(true));
    document.body.style.overflow = 'hidden';
  };

  return { location, inCartGames, openCart };
};
