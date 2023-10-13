import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
  GameListWrapperTypes,
  AddToCartTypes,
} from 'pages/Games/GameList/types'

export const GameListWrapper = styled.div<GameListWrapperTypes>`
  display: ${({ games }) => (games[0].id === -1 ? 'flex' : 'grid')};
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`

export const GameWrapper = styled.div(
  ({ theme }) => css`
    position: relative;
    max-width: 700px;
    background-color: ${theme.colors.black[200]};
    color: white;
    border-radius: 18px;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.black[200]};
      transform: scale(1.05);
    }
  `,
)

export const DeleteButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: black;
  color: #ff0000;
  border-radius: 50%;
  cursor: pointer;
`

export const Image = styled.img`
  aspect-ratio: 1.7 / 1;
  object-fit: cover;
  width: 100%;
  background-position: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 20px;
`

export const Price = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.white[50]};
    cursor: auto;
  `,
)

export const AddToCart = styled.button<AddToCartTypes>(
  ({ isInCart, theme }) => css`
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0;
    background-color: transparent;
    color: ${isInCart ? theme.colors.teal[100] : theme.colors.white[50]};
    border: none;
    cursor: ${isInCart ? '' : 'pointer'};

    svg {
      height: 18px;
      width: 18px;
      fill: ${theme.colors.teal[100]};
    }
  `,
)

export const PlatformIcons = styled.div`
  display: flex;
  gap: 7px;

  svg {
    height: 13px;
    fill: white;
  }
`

export const GameName = styled(Link)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    text-decoration: none;
    color: white;
  `,
)
