import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  name: string;
  price: string;
  image: string;
}

function Game({ name, price, image }: Props) {
  return (
    <GameWrapper to="game">
      <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
      <Info>
        <Price>
          <span>Add to cart +</span> $ {price}
        </Price>
        <GameName>{name}</GameName>
      </Info>
    </GameWrapper>
  );
}

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

export default Game;
