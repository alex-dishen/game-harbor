import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ISearchGamesWrapper } from 'components/Search/interfaces';

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
    overflow: scroll;
    box-shadow: 0 0 20px #000000;
  `
);

export const GameWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  color: black;
  font-size: 17px;
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
    background-color: rgb(218, 218, 218);
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.img`
  flex-shrink: 0;
  aspect-ratio: 1.4 / 1;
  width: 140px;
  object-fit: cover;
  background-position: center;
  border-radius: 8px;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const GameName = styled.p`
  margin: 0;

  @media (max-width: 760px) {
    text-align: center;
  }
`;
