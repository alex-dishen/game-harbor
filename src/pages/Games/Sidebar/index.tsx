import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { RootState } from 'redux/types';
import { setIsHideSidebar } from 'redux/counterSlice';
import { handleFilterClick } from 'utils/helpers';
import {
  releases,
  tops,
  platforms,
  genres,
  variants,
} from 'pages/Games/Sidebar/constants';
import {
  StyledSidebar,
  CategoryHolder,
  Filter,
} from 'pages/Games/Sidebar/styles';

function Sidebar() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { currentFilter, isChangeSidebar } = reduxState;

  const hideSidebar = () => {
    if (isChangeSidebar) dispatch(setIsHideSidebar(true));
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
            onClick={(e) => {
              handleFilterClick(e, dispatch, currentFilter);
              hideSidebar();
            }}
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
            onClick={(e) => {
              handleFilterClick(e, dispatch, currentFilter);
              hideSidebar();
            }}
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
            onClick={(e) => {
              handleFilterClick(e, dispatch, currentFilter);
              hideSidebar();
            }}
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
            onClick={(e) => {
              handleFilterClick(e, dispatch, currentFilter);
              hideSidebar();
            }}
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
