import { useEffect, useState } from 'react';
import { CircularProgress } from 'react-cssfx-loading';
import { IGame } from 'api/interfaces';
import Sidebar from 'pages/Games/Sidebar';
import Top from 'pages/Games/Top';
import GameList from 'pages/Games/GameList';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { StyledGamePage, MenuHolder, Content } from 'pages/Games/styles';
import getGamesList from 'api/gamesList';
import getPrice from 'utils/helpers';

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

  const loadGamesForGenres = async () => {
    let response;

    if (currentFilter === 'RPG') {
      response = await getGamesList({ genres: 'role-playing-games-rpg' });
    } else {
      response = await getGamesList({
        genres: currentFilter.toLocaleLowerCase(),
      });
    }

    if (response !== undefined) {
      const { results } = response;
      setGames(results);
    }
  };

  const loadGamesForNewReleases = async () => {
    let response;
    if (currentFilter === 'Last 30 days') {
      response = await getGamesList({
        dates: getLast30Days(),
        genres: 'shooter',
      });
    } else if (currentFilter === 'This week') {
      response = await getGamesList({ dates: getThisWeek() });
    } else if (currentFilter === 'Next week') {
      response = await getGamesList({
        dates: getNextWeek(),
      });
    }
    if (response !== undefined) {
      const { results } = response;
      setGames(results);
      results.forEach((game) => (game.price = getPrice(game)));
    }
  };

  const loadGamesForPlatforms = async () => {
    let response;

    if (currentFilter === 'PC') {
      response = await getGamesList({ parent_platforms: 1 });
    } else if (currentFilter === 'PlayStation 4') {
      response = await getGamesList({ parent_platforms: 2 });
    } else if (currentFilter === 'Xbox One') {
      response = await getGamesList({ parent_platforms: 3 });
    } else if (currentFilter === 'Nintendo Switch') {
      response = await getGamesList({ parent_platforms: 7 });
    } else if (currentFilter === 'iOS') {
      response = await getGamesList({ parent_platforms: 5 });
    } else if (currentFilter === 'Android') {
      response = await getGamesList({ parent_platforms: 8 });
    }
    if (response !== undefined) {
      const { results } = response;
      setGames(results);
    }
  };

  const getThisYear = () => {
    const thisYear = new Date().getFullYear();
    return `${thisYear}-01-01,${thisYear}-12-31`;
  };

  const getPreviousYear = () => {
    const thisYear = new Date().getFullYear();
    return `${thisYear - 1}-01-01,${thisYear - 1}-12-31`;
  };

  const loadGamesForTop = async () => {
    let response;
    if (currentFilter === 'Best of the year') {
      response = await getGamesList({
        page_size: 40,
        dates: getThisYear(),
        ordering: '-added',
      });
    } else if (currentFilter === 'Popular in 2022') {
      response = await getGamesList({
        page_size: 40,
        dates: getPreviousYear(),
        ordering: '-added',
      });
    } else if (currentFilter === 'All time top 250') {
      response = await getGamesList({ page_size: 40, ordering: '-added' });
    }
    if (response !== undefined) {
      const { results } = response;
      setGames(results);
      results.forEach((game) => (game.price = getPrice(game)));
    }
  };

  const loadGames = async () => {
    const response = await getGamesList({ dates: getNextWeek() });
    const { results } = response;
    setGames(results);
    results.forEach((game) => (game.price = getPrice(game)));
  };

  useEffect(() => {
    loadGamesForNewReleases();
    loadGamesForTop();
    loadGamesForGenres();
    loadGamesForPlatforms();
  }, [currentFilter]);

  useEffect(() => {
    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, [isChangeNavbar]);

  useEffect(() => {
    setCurrentFilter('Next week');
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
