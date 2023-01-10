import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Top from './components/Top';
import GameList from './components/GameList';

function Games() {
  return (
    <GamesPageWrapper>
      <Sidebar />
      <Content>
        <Top />
        <GameList />
      </Content>
    </GamesPageWrapper>
  );
}

const GamesPageWrapper = styled.main`
  display: flex;
  gap: 45px;
  padding: 25px 40px;
  color: white;
`;

const Content = styled.div`
  flex: 1;
  padding: 0 10px 10px 10px;
  height: 84.5vh;
  overflow: scroll;

  svg {
    fill: white;
  }
`;

export default Games;
