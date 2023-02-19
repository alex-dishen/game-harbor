import styled, { CSSObject, css } from 'styled-components';
import { IStyledSidebar, IFilter } from 'pages/Games/Sidebar/interfaces';

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
  zIndex: '4',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  backgroundColor: 'rgb(15, 16, 17);',
  overflow: 'scroll',
};

export const StyledSidebar = styled.aside<IStyledSidebar>`
  ${({ isChangeNavbar }) =>
    isChangeNavbar ? (fullScreen as CSSObject) : (aside as CSSObject)}
`;

export const CategoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div:first-child {
    font-size: 26px;
    font-weight: 600;
  }
`;

export const Filter = styled.div<IFilter>(
  ({ filterName, currentFilter }) => css`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      width: 38px;
      padding: 8px;
      background-color: ${filterName === currentFilter
        ? 'rgb(255, 255, 255)'
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
        background-color: rgb(255, 255, 255);
      }

      svg {
        fill: black;
      }
    }
  `
);
