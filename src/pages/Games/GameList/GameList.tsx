import uniqid from 'uniqid';
import { GameTypes } from '../../../utils/Game.types';
import {
  GameListWrapper,
  GameWrapper,
  BackgroundImage,
  Info,
  Price,
  GameName,
} from './styles';

interface IGameList {
  games: GameTypes[];
}

function GameList({ games }: IGameList) {
  return (
    <GameListWrapper>
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
    </GameListWrapper>
  );
}

export default GameList;
