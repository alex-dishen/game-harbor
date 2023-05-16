import useSidebar from 'pages/Games/Sidebar/useSidebar';
import { filters } from 'pages/Games/Sidebar/constants';
import {
  StyledSidebar,
  CategoryHolder,
  Header,
  Filter,
  IconHolder,
} from 'pages/Games/Sidebar/styles';

function Sidebar() {
  const { isChangeSidebar, currentFilter, variant, exitOption, onClick } =
    useSidebar();

  return (
    <StyledSidebar
      variants={variant}
      initial="hidden"
      animate="show"
      exit={exitOption}
      isChangeSidebar={isChangeSidebar}
    >
      {filters.map(({ id, header, options }) => (
        <CategoryHolder key={id}>
          <Header>{header}</Header>
          {options.map(({ key, name, icon }) => (
            <Filter key={key} onClick={onClick}>
              <IconHolder isHighlight={name === currentFilter}>
                {icon}
              </IconHolder>
              {name}
            </Filter>
          ))}
        </CategoryHolder>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
