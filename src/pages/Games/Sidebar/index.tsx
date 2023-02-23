import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { RootState } from 'redux/types';
import { setIsHideSidebar } from 'redux/counterSlice';
import { handleFilterClick } from 'utils/helpers';
import { filters, variants } from 'pages/Games/Sidebar/constants';
import {
  StyledSidebar,
  CategoryHolder,
  Filter,
} from 'pages/Games/Sidebar/styles';

function Sidebar() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { currentFilter, isChangeSidebar } = reduxState;

  const onClick = (e: MouseEvent<HTMLElement>) => {
    handleFilterClick(e, dispatch, currentFilter);
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
      {filters.map((filter) => (
        <CategoryHolder key={uniqid()}>
          <div>{filter.header}</div>
          {filter.options?.map((option) => (
            <Filter
              key={uniqid()}
              onClick={onClick}
              filterName={option.name}
              currentFilter={currentFilter}
            >
              <div>{option.icon}</div>
              {option.name}
            </Filter>
          ))}
        </CategoryHolder>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
