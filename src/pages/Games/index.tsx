import { useEffect, useState } from 'react';
import { CircularProgress } from 'react-cssfx-loading';
import useGames from 'pages/Games/useGames';
import { IGame } from 'api/interfaces';
import Sidebar from 'pages/Games/Sidebar';
import Top from 'pages/Games/Top';
import GameList from 'pages/Games/GameList';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { StyledGamePage, MenuHolder, Content } from 'pages/Games/styles';

interface GamesProps {
  isChangeNavbar: boolean;
  isHideNavbar: boolean;
  setIsChangeNavbar: (a: boolean) => void;
  setIsHideNavbar: (a: boolean) => void;
  setGameID: (a: number) => void;
}

function Games({
  isChangeNavbar,
  isHideNavbar,
  setIsChangeNavbar,
  setIsHideNavbar,
  setGameID,
}: GamesProps) {
  const [games, setGames] = useState<IGame[]>();
  const [currentFilter, setCurrentFilter] = useState('');

  const getWindowWidth = () => {
    const { innerWidth } = window;

    if (innerWidth <= 700) {
      if (!isHideNavbar) {
        setIsHideNavbar(true);
        setIsChangeNavbar(true);
      }
    } else {
      setIsHideNavbar(false);
      setIsChangeNavbar(false);
    }
  };

  useEffect(() => {
    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, [isChangeNavbar]);

  useGames({ currentFilter, setCurrentFilter, setGames });

  return (
    <StyledGamePage
      games={games}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: 25 }}
    >
      {games === undefined ? (
        <CircularProgress
          color="rgb(24, 176, 171)"
          height="100px"
          width="100px"
          duration="2.5s"
        />
      ) : (
        <>
          {isHideNavbar ? (
            <MenuHolder onClick={() => setIsHideNavbar(false)}>
              <Menu />
            </MenuHolder>
          ) : (
            <Sidebar
              setGames={setGames}
              isChangeNavbar={isChangeNavbar}
              setIsHideNavbar={setIsHideNavbar}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
            />
          )}
          <Content>
            <Top currentFilter={currentFilter} />
            <GameList games={games} setGameID={setGameID} />
          </Content>
        </>
      )}
    </StyledGamePage>
  );
}

export default Games;
