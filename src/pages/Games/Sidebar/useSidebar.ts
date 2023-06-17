import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsHideSidebar } from 'redux/harborSlice';
import { RootState } from 'redux/types';
import { handleFilterClick } from 'helpers';
import { variants } from 'pages/Games/Sidebar/constants';

const useSidebar = () => {
  const dispatch = useDispatch();
  const harborState = useSelector((state: RootState) => state.harbor);
  const games = useSelector((state: RootState) => state.games.games);
  const windowWidth = window.innerWidth;
  const variant = windowWidth < 700 ? variants : {};
  const exitOption = windowWidth < 690 ? 'hidden' : '';

  const { currentFilter, isChangeSidebar } = harborState;

  const onClick = (e: MouseEvent<HTMLElement>) => {
    handleFilterClick({
      e,
      dispatch,
      currentFilter,
      games,
    });
    if (isChangeSidebar) dispatch(setIsHideSidebar(true));
  };

  return { isChangeSidebar, currentFilter, variant, exitOption, onClick };
};

export default useSidebar;
