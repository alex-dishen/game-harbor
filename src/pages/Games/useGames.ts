import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGames,
  setIsChangeSidebar,
  setIsHideSidebar,
} from 'redux/counterSlice';
import { getGamesList } from 'api/gameData';
import { RootState } from 'redux/types';
import { returnGames } from 'utils/helpers';
import {
  previousYear,
  getLast30Days,
  getThisWeek,
  getNextWeek,
  getThisYear,
  getPreviousYear,
} from 'pages/Games/helpers';

const useGames = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const { currentFilter, orderTitle, isChangeSidebar, isHideSidebar, games } =
    reduxStore;

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

  const getOrder = () => {
    if (orderTitle === 'Release date') return '-released';

    if (orderTitle === 'Popularity') return '-added';

    if (orderTitle === 'Name') return 'name';

    if (orderTitle === 'Rating') return '-rating';
  };

  const getGames = () => {
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
    const results = await returnGames({ getGames });
    // When user opens Games page from search bar the currentFilter === ''
    // and results are set to empty array. To prevent games from getting
    // reset to empty array the condition below is used
    if (results?.length === 0) return;
    if (results) dispatch(setGames(results));
  };

  const handleOnClick = () => {
    dispatch(setIsHideSidebar(!isHideSidebar));
  };

  useEffect(() => {
    manipulateSideBar();

    window.addEventListener('resize', manipulateSideBar);

    return () => {
      window.removeEventListener('resize', manipulateSideBar);
    };
  }, [isChangeSidebar]);

  useEffect(() => {
    loadGames();
  }, [currentFilter, orderTitle]);

  return { games, isShowMenu, isHideSidebar, handleOnClick };
};

export default useGames;
