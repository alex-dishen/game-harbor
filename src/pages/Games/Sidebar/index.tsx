import uniqid from 'uniqid';
import useSidebar from 'pages/Games/Sidebar/useSidebar';
import { filters, variants } from 'pages/Games/Sidebar/constants';
import {
  StyledSidebar,
  CategoryHolder,
  Filter,
} from 'pages/Games/Sidebar/styles';

function Sidebar() {
  const { isChangeSidebar, currentFilter, onClick } = useSidebar();

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
