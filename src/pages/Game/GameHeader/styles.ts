import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    color: white;

    @media (max-width: ${theme.breakpoints.md}) {
      a {
        font-size: ${theme.fontSizes.xs};
      }

      svg {
        height: 25px;
      }
    }
  `
);

export const BackButton = styled(Link)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgb(204, 204, 204);
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    svg {
      height: 25px;
      width: 25px;
    }

    &:hover {
      color: rgb(24, 176, 171);

      svg {
        fill: rgb(24, 176, 171);
      }
    }
  `
);

export const GameName = styled.span(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    font-weight: 800;
    word-break: keep-all;
    text-align: end;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.lg};
    }
  `
);
