import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import GameList from '../components/GameList';
import { ReactComponent as Chevron } from '../assets/chevron-down.svg';

function Games() {
  return (
    <GamesPageWrapper>
      <Sidebar />
      <Main>
        <TopWrapper>
          <FilterName>Filter Name</FilterName>
          <OrderSection>
            <div>
              Order by: ...
              <Chevron style={{ height: '20px', width: '20px' }} />
            </div>
            <div>
              Platforms <Chevron style={{ height: '20px', width: '20px' }} />
            </div>
          </OrderSection>
        </TopWrapper>
        <GameList />
      </Main>
    </GamesPageWrapper>
  );
}

const GamesPageWrapper = styled.div`
  display: flex;
  gap: 60px;
  padding: 25px 40px;
  color: white;
`;

const Main = styled.main`
  flex: 1;

  svg {
    fill: white;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FilterName = styled.div`
  font-size: 60px;
  font-weight: 800;
`;

const OrderSection = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    gap: 8px;
    padding: 8px 15px;
    background-color: rgb(38, 38, 38);
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Games;
