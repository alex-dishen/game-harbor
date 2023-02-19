import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { RootState } from 'redux/store';
import { setCurrentFilter, setGames } from 'redux/counterSlice';
import {
  releases,
  tops,
  platforms,
  genres,
} from 'pages/Games/Sidebar/constants';
import { ReactComponent as Close } from 'assets/close.svg';
import {
  StyledSidebar,
  CloseHolder,
  CategoryHolder,
  Filter,
} from 'pages/Games/Sidebar/styles';

interface SidebarProps {
  setIsHideNavbar: (a: boolean) => void;
}

function Sidebar({ setIsHideNavbar }: SidebarProps) {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { currentFilter } = reduxState;
  const { isChangeNavbar } = reduxState;

  const handleFilterClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    // games are set to an empty array in order to display a spinner when
    // refetching data instead of just unexpected screen update
    if (textContent !== currentFilter) dispatch(setGames([]));
    if (textContent !== null) dispatch(setCurrentFilter(textContent));
  };

  return (
    <StyledSidebar isChangeNavbar={isChangeNavbar}>
      {isChangeNavbar && (
        <CloseHolder
          onClick={() => {
            setIsHideNavbar(true);
          }}
        >
          <Close />
        </CloseHolder>
      )}

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
