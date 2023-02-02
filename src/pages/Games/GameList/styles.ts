import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GameTypes } from 'utils/Game.types';

interface IGames {
  games: GameTypes[];
}

const GameListWrapper = styled.div<IGames>`
  display: ${({ games }) => (games.length === 0 ? 'flex' : 'grid')};
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const GameWrapper = styled.div`
  background-color: rgb(32, 32, 32);
  color: white;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(45, 45, 45);
    transform: scale(1.05);
  }
`;

const BackgroundImage = styled.div`
  aspect-ratio: 1.7 / 1;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 20px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: auto;

  span {
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const GameName = styled(Link)`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;

export { GameListWrapper, GameWrapper, BackgroundImage, Info, Price, GameName };
