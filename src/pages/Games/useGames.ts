import { useEffect } from 'react';
import getGamesList from 'api/gamesList';
import { IUseGames } from 'pages/Games/interfaces';
import {
  getLast30Days,
  getThisWeek,
  getNextWeek,
  getThisYear,
  getPreviousYear,
  getPrice,
} from 'pages/Games/helpers';

const useGames = ({ currentFilter, setCurrentFilter, setGames }: IUseGames) => {
  const getGames = async () => {
    if (currentFilter === 'Last 30 days')
      return getGamesList({ dates: getLast30Days() });

    if (currentFilter === 'This week')
      return getGamesList({ dates: getThisWeek() });

    if (currentFilter === 'Next week')
      return getGamesList({ dates: getNextWeek() });

    if (currentFilter === 'Best of the year')
      return getGamesList({ dates: getThisYear() });

    if (currentFilter === 'Popular in 2022')
      return getGamesList({ dates: getPreviousYear() });

    if (currentFilter === 'All time top 250')
      return getGamesList({ page_size: 40, ordering: '-added' });

    if (currentFilter === 'PC') return getGamesList({ parent_platforms: 1 });

    if (currentFilter === 'PlayStation 4')
      return getGamesList({ parent_platforms: 2 });

    if (currentFilter === 'Xbox One')
      return getGamesList({ parent_platforms: 3 });

    if (currentFilter === 'Nintendo Switch')
      return getGamesList({ parent_platforms: 7 });

    if (currentFilter === 'iOS') return getGamesList({ parent_platforms: 5 });

    if (currentFilter === 'Android')
      return getGamesList({ parent_platforms: 8 });

    if (currentFilter === 'RPG')
      return getGamesList({ genres: 'role-playing-games-rpg' });

    return getGamesList({ genres: currentFilter.toLocaleLowerCase() });
  };

  const loadGames = async () => {
    const response = await getGames();
    if (!response) return;
    const { results } = response;
    setGames(results);
    results.forEach((game) => (game.price = getPrice(game)));
  };

  useEffect(() => {
    loadGames();
  }, [currentFilter]);

  useEffect(() => {
    setCurrentFilter('Next week');
  }, []);
};

export default useGames;
