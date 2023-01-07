import styled from 'styled-components';
import { chosenGames } from '../utils/games';

function Cart() {
  return (
    <>
      <CartWrapper>
        <Header>
          <div>10 Games</div>
          <div>Clear</div>
        </Header>
        <ChosenGames>
          {chosenGames.map((game) => (
            <GameHolder>
              <div>{game.name}</div>
              <div>
                <div>{game.price}</div>
                <Cross>x</Cross>
              </div>
            </GameHolder>
          ))}
        </ChosenGames>
        <TotalPrice>Total: $243.32</TotalPrice>
      </CartWrapper>
      <Overlay />
    </>
  );
}

const CartWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 360px;
  padding: 30px;
  background-color: rgb(26, 26, 26);
  color: rgb(153, 153, 153);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:first-child {
    color: white;
    font-size: 24px;
    font-weight: 800;
  }

  & div:last-child {
    cursor: pointer;
  }
`;

const ChosenGames = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  overflow: scroll;
`;

const GameHolder = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px;
  background-color: rgb(38, 38, 38);
  border-radius: 10px;

  & > div:first-child {
    color: white;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const Cross = styled.div`
  display: flex;
  justify-content: center;
  height: 22px;
  width: 22px;
  background-color: rgb(64, 64, 64);
  border-radius: 50%;
  cursor: pointer;
`;

const TotalPrice = styled.footer`
  color: rgb(153, 153, 153);
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export default Cart;
