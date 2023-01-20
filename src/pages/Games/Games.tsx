import { useEffect, useState } from 'react';
import { CircularProgress } from 'react-cssfx-loading';
import getData, { ResponseSchema } from '../../api/api';
// import games from '../../../utils/games';
import { GameTypes } from '../../utils/Game.types';
import Sidebar from './Sidebar/Sidebar';
import Top from './Top/Top';
import GameList from './GameList/GameList';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { StyledGamePage, MenuHolder, Content } from './styles';

interface Props {
  isChangeNavbar: boolean;
  setIsChangeNavbar: (a: boolean) => void;
}

function Games({ isChangeNavbar, setIsChangeNavbar }: Props) {
  const [games, setGames] = useState<GameTypes[]>();
  const [isHideNavbar, setIsHideNavbar] = useState(false);

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

  useEffect(() => {
    (async () => {
      const newGames = await getData<ResponseSchema<GameTypes>>();
      const { results } = newGames;
      setGames(results);
    })();
  }, []);

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
              isChangeNavbar={isChangeNavbar}
              setIsHideNavbar={setIsHideNavbar}
            />
          )}
          <Content>
            <Top isChangeNavbar={isChangeNavbar} />
            <GameList games={games} />
          </Content>
        </>
      )}
    </StyledGamePage>
  );
}

export default Games;
