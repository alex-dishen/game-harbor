import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import Game from './Game';
import getData, { ResponseSchema } from '../../../api/api';
import { GameTypes } from '../../../utils/Game.types';

function GameList() {
  const [games, setGames] = useState<GameTypes[]>();

  useEffect(() => {
    (async () => {
      const newGames = await getData<ResponseSchema<GameTypes>>();
      const { results } = newGames;
      console.log(results);
      setGames(results);
    })();
  }, []);

  return (
    <GameListWrapper>
      {games !== undefined ? (
        <>
          {games.map((game) => (
            <Game
              key={uniqid()}
              name={game.name}
              price={game.price}
              image={game.background_image}
            />
          ))}
        </>
      ) : (
        <div>Hi world</div>
      )}
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
