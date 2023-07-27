import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ISearchGamesWrapper } from 'components/Search/interfaces'

export const SearchGamesWrapper = styled.div<ISearchGamesWrapper>(
  ({ games }) => css`
    position: absolute;
    top: 45px;
    display: flex;
    flex-direction: column;
    ${games.length === 0
      ? 'justify-content: center; align-items: center;'
      : ''};
    height: 400px;
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 16px;
    overflow: auto;
    box-shadow: 0 0 20px #000000;
  `,
)

export const GameWrapper = styled(Link)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:first-child {
      padding-top: 20px;
    }
    &:last-child {
      padding-bottom: 20px;
    }

    &:hover {
      background-color: ${theme.colors.white[200]};
    }

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
    }
  `,
)

export const BackgroundImage = styled.img(
  ({ theme }) => css`
    flex-shrink: 0;
    aspect-ratio: 1.4 / 1;
    width: 140px;
    object-fit: cover;
    background-position: center;
    border-radius: 8px;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 100%;
    }
  `,
)

export const GameName = styled.p(
  ({ theme }) => css`
    margin: 0;

    @media (max-width: ${theme.breakpoints.md}) {
      text-align: center;
    }
  `,
)
