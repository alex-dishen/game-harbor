import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { CircularProgress } from 'react-cssfx-loading';
import { RootState } from 'redux/store';
import { setIsChangeSidebar, setIsHideSidebar } from 'redux/counterSlice';
import useGames from 'pages/Games/useGames';
import Sidebar from 'pages/Games/Sidebar';
import Top from 'pages/Games/Top';
import GameList from 'pages/Games/GameList';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { ReactComponent as Close } from 'assets/close.svg';
import {
  StyledGamePage,
  MenuHolder,
  Content,
  Overflow,
} from 'pages/Games/styles';

function Games() {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const { isChangeSidebar } = reduxStore;
  const { isHideSidebar } = reduxStore;
  const { games } = reduxStore;
  const [isShowMenu, setIsShowMenu] = useState(false);

  const manipulateSideBar = () => {
    const { innerWidth } = window;

    if (innerWidth <= 700) {
      setIsShowMenu(true);
      // This check prevents sidebar from hiding when
      // it is opened and user resizes the screen
      if (isHideSidebar) return;
      dispatch(setIsHideSidebar(true));
      dispatch(setIsChangeSidebar(true));
      return;
    }

    setIsShowMenu(false);
    dispatch(setIsHideSidebar(false));
    dispatch(setIsChangeSidebar(false));
  };

  useEffect(() => {
    manipulateSideBar();

    window.addEventListener('resize', manipulateSideBar);

    return () => {
      window.removeEventListener('resize', manipulateSideBar);
    };
  }, [isChangeSidebar]);

  useGames();

  return (
    <StyledGamePage
      games={games}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: 25 }}
    >
      {games.length === 0 ? (
        <CircularProgress
          color="rgb(24, 176, 171)"
          height="100px"
          width="100px"
          duration="2.5s"
        />
      ) : (
        <>
          {isShowMenu && (
            <>
              <Overflow isHideSidebar={isHideSidebar} />
              <MenuHolder
                onClick={() => dispatch(setIsHideSidebar(!isHideSidebar))}
              >
                {isHideSidebar ? <Menu /> : <Close />}
              </MenuHolder>
            </>
          )}
          <AnimatePresence initial={false}>
            {!isHideSidebar && <Sidebar />}
          </AnimatePresence>
          <Content>
            <Top />
            <GameList />
          </Content>
        </>
      )}
    </StyledGamePage>
  );
}

export default Games;
