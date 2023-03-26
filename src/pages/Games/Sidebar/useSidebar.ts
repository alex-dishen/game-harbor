import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsHideSidebar } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import { handleFilterClick } from 'utils/helpers';

const useSidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const reduxState = useSelector((state: RootState) => state.harbor);

  const { currentFilter, isChangeSidebar } = reduxState;

  const onClick = (e: MouseEvent<HTMLElement>) => {
    handleFilterClick(e, dispatch, currentFilter, location.pathname);
    if (isChangeSidebar) dispatch(setIsHideSidebar(true));
  };

  return { isChangeSidebar, currentFilter, onClick };
};

export default useSidebar;
