import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  GameListWrapperTypes,
  AddToCartTypes,
} from 'pages/Games/GameList/types';

export const GameListWrapper = styled.div<GameListWrapperTypes>`
  display: ${({ games }) => (games[0].id === -1 ? 'flex' : 'grid')};
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

export const GameWrapper = styled.div`
  background-color: rgb(32, 32, 32);
  color: white;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(45, 45, 45);
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  aspect-ratio: 1.7 / 1;
  object-fit: cover;
  width: 100%;
  background-position: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 20px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(153, 153, 153);
  cursor: auto;
`;

export const AddToCart = styled.button<AddToCartTypes>(
  ({ isInCart }) => css`
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0;
    background-color: transparent;
    color: ${isInCart ? 'rgb(24, 176, 171)' : 'rgb(153, 153, 153)'};
    border: none;
    cursor: ${isInCart ? '' : 'pointer'};

    svg {
      height: 18px;
      width: 18px;
      fill: rgb(24, 176, 171);
    }
  `
);

export const PlatformIcons = styled.div`
  display: flex;
  gap: 7px;

  svg {
    height: 13px;
    fill: white;
  }
`;

export const GameName = styled(Link)`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;
