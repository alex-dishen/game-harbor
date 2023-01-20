import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import games from '../../../utils/games';
import getData, { ResponseSchema } from '../../../api/api';
import { GameTypes } from '../../../utils/Game.types';
import {
  GameListWrapper,
  GameWrapper,
  BackgroundImage,
  Info,
  Price,
  GameName,
} from './styles';

function GameList() {
  // const [games, setGames] = useState<GameTypes[]>();

  // useEffect(() => {
  //   (async () => {
  //     const newGames = await getData<ResponseSchema<GameTypes>>();
  //     const { results } = newGames;
  //     console.log(results);
  //     setGames(results);
  //   })();
  // }, []);

  return (
    <GameListWrapper>
      {games !== undefined ? (
        <>
          {games.map((game) => (
            <GameWrapper key={uniqid()} to="game">
              <BackgroundImage
                style={{ backgroundImage: `url(${game.background_image})` }}
              />
              <Info>
                <Price>
                  <span>Add to cart +</span> $ {game.price}
                </Price>
                <GameName>{game.name}</GameName>
              </Info>
            </GameWrapper>
          ))}
        </>
      ) : (
        <div>Hello world</div>
      )}
    </GameListWrapper>
  );
}

export default GameList;
