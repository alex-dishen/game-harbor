import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IGameListWrapper } from 'pages/Games/GameList/interfaces';

export const GameListWrapper = styled.div<IGameListWrapper>`
  display: ${({ games }) => (games.length === 0 ? 'flex' : 'grid')};
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

export const BackgroundImage = styled.div`
  aspect-ratio: 1.7 / 1;
  background-size: cover;
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
  cursor: auto;

  span {
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

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
