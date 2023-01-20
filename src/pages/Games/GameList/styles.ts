import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const GameWrapper = styled(Link)`
  background-color: rgb(32, 32, 32);
  text-decoration: none;
  color: white;
  border-radius: 18px;
  cursor: default;
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

const GameName = styled.div`
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
`;

export { GameListWrapper, GameWrapper, BackgroundImage, Info, Price, GameName };
