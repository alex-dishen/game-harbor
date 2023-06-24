import styled, { css } from 'styled-components'
import { StatusTypes } from 'pages/Game/Indicators/types'

export const StyledPrice = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 22px;
    background: linear-gradient(
      90deg,
      rgba(26, 26, 26, 0) 0%,
      rgba(26, 26, 26, 1) 100%
    );
    color: white;
    border-radius: 10px;
    grid-area: price;

    & > span:first-child {
      font-size: ${theme.fontSizes.xs};
      font-weight: 500;
    }
  `,
)

export const Status = styled.span<StatusTypes>(
  ({ isInCart, theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${isInCart ? theme.colors.teal[100] : 'white'};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    cursor: ${isInCart ? '' : 'pointer'};

    svg {
      height: 25px;
      fill: ${theme.colors.teal[100]} !important;
    }
  `,
)
