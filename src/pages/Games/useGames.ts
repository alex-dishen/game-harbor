import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGames } from 'redux/counterSlice';
import { getGamesList } from 'api/gameData';
import { RootState } from 'redux/store';
import {
  previousYear,
  getLast30Days,
  getThisWeek,
  getNextWeek,
  getThisYear,
  getPreviousYear,
  getPrice,
} from 'pages/Games/helpers';

const useGames = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const { currentFilter } = reduxStore;
  const { orderTitle } = reduxStore;

  const getOrder = () => {
    if (orderTitle === 'Release date') {
      dispatch(setGames([]));
      return '-released';
    }

    if (orderTitle === 'Popularity') {
      dispatch(setGames([]));
      return '-added';
    }

    if (orderTitle === 'Name') {
      dispatch(setGames([]));
      return 'name';
    }

    if (orderTitle === 'Rating') {
      dispatch(setGames([]));
      return '-rating';
    }
  };

  const getGames = async () => {
    if (currentFilter === 'Last 30 days')
      return getGamesList({ dates: getLast30Days(), ordering: getOrder() });

    if (currentFilter === 'This week')
      return getGamesList({ dates: getThisWeek(), ordering: getOrder() });

    if (currentFilter === 'Next week')
      return getGamesList({ dates: getNextWeek(), ordering: getOrder() });

    if (currentFilter === 'Best of the year')
      return getGamesList({ dates: getThisYear(), ordering: '-added' });

    if (currentFilter === `Popular in ${previousYear}`)
      return getGamesList({ dates: getPreviousYear(), ordering: '-added' });

    if (currentFilter === 'All time top')
      return getGamesList({ page_size: 40, ordering: '-added' });

    if (currentFilter === 'PC')
      return getGamesList({ parent_platforms: 1, ordering: getOrder() });

    if (currentFilter === 'PlayStation')
      return getGamesList({ parent_platforms: 2, ordering: getOrder() });

    if (currentFilter === 'Xbox One')
      return getGamesList({ parent_platforms: 3, ordering: getOrder() });

    if (currentFilter === 'Nintendo Switch')
      return getGamesList({ parent_platforms: 7, ordering: getOrder() });

    if (currentFilter === 'iOS')
      return getGamesList({ parent_platforms: 5, ordering: getOrder() });

    if (currentFilter === 'Android')
      return getGamesList({ parent_platforms: 8, ordering: getOrder() });

    if (currentFilter === 'RPG')
      return getGamesList({
        genres: 'role-playing-games-rpg',
        ordering: getOrder(),
      });

    return getGamesList({
      genres: currentFilter.toLocaleLowerCase(),
      ordering: getOrder(),
    });
  };

  const loadGames = async () => {
    const response = await getGames();
    if (!response) return;
    const { results } = response;
    dispatch(setGames(results));
    results.forEach((game) => (game.price = getPrice(game)));
  };

  useEffect(() => {
    loadGames();
  }, [currentFilter, orderTitle]);
};

export default useGames;
