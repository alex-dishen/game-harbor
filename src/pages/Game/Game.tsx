import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Images from './components/Images';
import Info from './components/Info';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as Check } from '../../assets/check.svg';

function Game() {
  return (
    <GameWrapper>
      <Header>
        <BackButton to="/games" relative="path">
          <ArrowLeft /> Store
        </BackButton>
        <GameName>Game Name</GameName>
      </Header>
      <Main>
        <Images />
        <Info />
        <Price>
          <div>$13</div>
          <div>
            Added <Check />
          </div>
        </Price>
      </Main>
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px 40px 30px 40px;

  svg {
    height: 30px;
    fill: rgb(204, 204, 204);
    transition: 0.3s;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(204, 204, 204);
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgb(24, 176, 171);

    svg {
      fill: rgb(24, 176, 171);
    }
  }
`;

const GameName = styled.div`
  font-size: 46px;
  font-weight: 800;
`;

const Main = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr max(26vw, 300px);
  grid-template-rows: 1fr min-content;
  gap: 30px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px;
  background-color: rgb(26, 26, 26);
  color: white;
  border-radius: 10px;
  grid-column: -2 / -1;

  & > div:first-child {
    font-size: 18px;
    font-weight: 500;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: 600;

    svg {
      height: 25px;
      fill: white;
    }
  }
`;

export default Game;
