import styled, { CSSObject, css } from 'styled-components';
import {
  FilterProps,
  StyledSidebarProps,
} from 'pages/Games/Sidebar/interfaces';
import { motion } from 'framer-motion';

const aside = {
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  gap: '30px',
  padding: '30px 0 20px 0',
  overflow: 'scroll',
};

const fullScreen = {
  position: 'fixed',
  zIndex: '5',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  color: 'black',
  overflow: 'scroll',
};

const CustomMotionAside = ({
  isChangeSidebar,
  ...rest
}: StyledSidebarProps) => <motion.aside {...rest} />;

export const StyledSidebar = styled(CustomMotionAside)<StyledSidebarProps>`
  ${({ isChangeSidebar }) =>
    isChangeSidebar ? (fullScreen as CSSObject) : (aside as CSSObject)}
`;

// export const StyledSidebar = styled(motion.aside)<StyledSidebarProps>`
//   ${({ isChangeSidebar }) =>
//     isChangeSidebar ? (fullScreen as CSSObject) : (aside as CSSObject)}
// `;

export const CategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div:first-child {
    font-size: 26px;
    font-weight: 600;
  }
`;

export const Filter = styled.div<FilterProps>(
  ({ filterName, currentFilter }) => css`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;

    div {
      /* z-index is needed here to make the function
      get text content of its parent  */
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      width: 38px;
      padding: 8px;
      background-color: ${filterName === currentFilter
        ? 'white'
        : 'rgb(45, 45, 45)'};
      border-radius: 8px;
      transition: 0.5s;
    }

    svg {
      fill: ${filterName === currentFilter ? 'black' : 'white'};
      transition: 0.5s;
    }

    &:hover {
      div {
        background-color: white;
      }

      svg {
        fill: black;
      }
    }
  `
);
