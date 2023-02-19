import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from 'react-cssfx-loading';
import { RootState } from 'redux/store';
import { setIsChangeNavbar, setIsHideNavbar } from 'redux/counterSlice';
import useGames from 'pages/Games/useGames';
import Sidebar from 'pages/Games/Sidebar';
import Top from 'pages/Games/Top';
import GameList from 'pages/Games/GameList';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { StyledGamePage, MenuHolder, Content } from 'pages/Games/styles';

function Games() {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const { isChangeNavbar } = reduxStore;
  const { isHideNavbar } = reduxStore;
  const { games } = reduxStore;

  const getWindowWidth = () => {
    const { innerWidth } = window;

    if (innerWidth <= 700) {
      if (!isHideNavbar) {
        dispatch(setIsHideNavbar(true));
        dispatch(setIsChangeNavbar(true));
      }
    } else {
      dispatch(setIsHideNavbar(false));
      dispatch(setIsChangeNavbar(false));
    }
  };

  useEffect(() => {
    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, [isChangeNavbar]);

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
          {isHideNavbar ? (
            <MenuHolder onClick={() => dispatch(setIsHideNavbar(false))}>
              <Menu />
            </MenuHolder>
          ) : (
            <Sidebar setIsHideNavbar={setIsHideNavbar} />
          )}
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
