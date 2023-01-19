import uniqid from 'uniqid';
import games from '../../../utils/games';
import {
  GameListWrapper,
  GameWrapper,
  BackgroundImage,
  Info,
  Price,
  GameName,
} from './styles';

function GameList() {
  return (
    <GameListWrapper>
      {games.map((game) => (
        <GameWrapper key={uniqid()} to="game">
          <BackgroundImage style={{ backgroundImage: `url(${game.cover})` }} />
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
