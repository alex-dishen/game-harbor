import styled, { css } from 'styled-components';
import { IStatus } from 'pages/Game/Price/interfaces';

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px;
  background-color: rgb(26, 26, 26);
  color: white;
  border-radius: 10px;
  grid-area: price;

  & > span:first-child {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Status = styled.span<IStatus>(
  ({ isInCart }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${isInCart ? 'rgb(24, 176, 171)' : 'white'};
    font-size: 22px;
    font-weight: 600;
    cursor: ${isInCart ? '' : 'pointer'};

    svg {
      height: 25px;
      fill: rgb(24, 176, 171) !important;
    }
  `
);
