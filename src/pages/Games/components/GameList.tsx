import uniqid from 'uniqid';
import styled from 'styled-components';
import Game from './Game';

function GameList() {
  return (
    <GameListWrapper>
      {/* {games.map((game) => (
        <Game
          key={uniqid()}
          name={game.name}
          price={game.price}
          image={game.cover}
        />
      ))} */}
    </GameListWrapper>
  );
}

const GameListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 30px;
  margin-top: 30px;
`;

export default GameList;
