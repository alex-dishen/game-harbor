import { useEffect, useState } from 'react';
import { CircularProgress } from 'react-cssfx-loading';
// import games from '../../utils/games';
import { GameTypes } from '../../utils/Game.types';
import Sidebar from './Sidebar/Sidebar';
import Top from './Top/Top';
import GameList from './GameList/GameList';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { StyledGamePage, MenuHolder, Content } from './styles';
import getGamesList from '../../api/gamesList';

interface Props {
  isChangeNavbar: boolean;
  setIsChangeNavbar: (a: boolean) => void;
}

function Games({ isChangeNavbar, setIsChangeNavbar }: Props) {
  const [games, setGames] = useState<GameTypes[]>();
  const [isHideNavbar, setIsHideNavbar] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('');

  const currentDate = new Date();

  const formatDate = (date: Date) => date.toISOString().replace(/T.*/, '');

  const getLast30Days = () => {
    const dateCpy = new Date(currentDate.getTime());

    const pastDay = new Date(
      dateCpy.getFullYear(),
      dateCpy.getMonth(),
      dateCpy.getDate() - 30
    );

    return `${formatDate(pastDay)},${formatDate(currentDate)}`;
  };

  const getThisWeek = () => {
    const previousMonday = new Date();

    previousMonday.setDate(
      currentDate.getDate() - ((currentDate.getDay() + 6) % 7)
    );

    const thisSunday = new Date(
      previousMonday.getFullYear(),
      previousMonday.getMonth(),
      previousMonday.getDate() + 7
    );

    return `${formatDate(previousMonday)},${formatDate(thisSunday)}`;
  };

  const getNextWeek = () => {
    const dateCpy = new Date(currentDate.getTime());

    const nextMonday = new Date(
      dateCpy.setDate(dateCpy.getDate() + ((7 - dateCpy.getDay() + 1) % 7 || 7))
    );

    const nextSunday = new Date(
      nextMonday.getFullYear(),
      nextMonday.getMonth(),
      nextMonday.getDate() + 7
    );

    return `${formatDate(nextMonday)},${formatDate(nextSunday)}`;
  };

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
      console.log(getNextWeek());
      const response = await getGamesList({ dates: getNextWeek() });
      const { results } = response;
      console.log(response);
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
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
            />
          )}
          <Content>
            <Top
              isChangeNavbar={isChangeNavbar}
              currentFilter={currentFilter}
            />
            <GameList games={games} />
          </Content>
        </>
      )}
    </StyledGamePage>
  );
}

export default Games;
