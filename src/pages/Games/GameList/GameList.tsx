import uniqid from 'uniqid';
import { CircularProgress } from 'react-cssfx-loading';
import { IGame } from 'api/interfaces';
import {
  GameListWrapper,
  GameWrapper,
  BackgroundImage,
  Info,
  Price,
  GameName,
} from './styles';

interface GameListProps {
  games: IGame[];
}

function GameList({ games }: GameListProps) {
  return (
    <GameListWrapper games={games}>
      {games.length === 0 ? (
        <CircularProgress
          color="rgb(24, 176, 171)"
          height="80px"
          width="80px"
          duration="2s"
        />
      ) : (
        <>
          {games.map((game) => (
            <GameWrapper key={uniqid()}>
              <BackgroundImage
                style={{ backgroundImage: `url(${game.background_image})` }}
              />
              <Info>
                <Price>
                  <span>Add to cart +</span> $ {game.price}
                </Price>
                <GameName to="game">{game.name}</GameName>
              </Info>
            </GameWrapper>
          ))}
        </>
      )}
    </GameListWrapper>
  );
}

export default GameList;
