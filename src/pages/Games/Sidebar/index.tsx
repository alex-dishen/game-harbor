import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { RootState } from 'redux/types';
import { setCurrentFilter, setGames } from 'redux/counterSlice';
import { gameSpecification } from 'redux/constants';
import {
  releases,
  tops,
  platforms,
  genres,
} from 'pages/Games/Sidebar/constants';
import {
  StyledSidebar,
  CategoryHolder,
  Filter,
} from 'pages/Games/Sidebar/styles';

const variants = {
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};

function Sidebar() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { currentFilter } = reduxState;
  const { isChangeSidebar } = reduxState;

  const handleFilterClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    // games are set to a predefined array in order to display a spinner when
    // refetching data instead of just unexpected screen update
    if (textContent !== currentFilter) dispatch(setGames([gameSpecification]));
    if (textContent !== null) dispatch(setCurrentFilter(textContent));
  };

  return (
    <StyledSidebar
      variants={window.innerWidth < 700 ? variants : {}}
      initial="hidden"
      animate="show"
      exit={window.innerWidth < 690 ? 'hidden' : ''}
      isChangeSidebar={isChangeSidebar}
    >
      <CategoryHolder>
        <div>New Releases</div>
        {releases.map((release) => (
          <Filter
            key={uniqid()}
            onClick={handleFilterClick}
            filterName={release.name}
            currentFilter={currentFilter}
          >
            <div>{release.icon}</div>
            {release.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Top</div>
        {tops.map((top) => (
          <Filter
            key={uniqid()}
            onClick={handleFilterClick}
            filterName={top.name}
            currentFilter={currentFilter}
          >
            <div>{top.icon}</div>
            {top.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Platforms</div>
        {platforms.map((platform) => (
          <Filter
            key={uniqid()}
            onClick={handleFilterClick}
            filterName={platform.name}
            currentFilter={currentFilter}
          >
            <div>{platform.icon}</div>
            {platform.name}
          </Filter>
        ))}
      </CategoryHolder>

      <CategoryHolder>
        <div>Genres</div>
        {genres.map((genre) => (
          <Filter
            key={uniqid()}
            onClick={handleFilterClick}
            filterName={genre.name}
            currentFilter={currentFilter}
          >
            <div>{genre.icon}</div>
            {genre.name}
          </Filter>
        ))}
      </CategoryHolder>
    </StyledSidebar>
  );
}

export default Sidebar;
