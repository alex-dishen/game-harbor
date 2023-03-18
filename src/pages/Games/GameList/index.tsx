import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { CircularProgress } from 'react-cssfx-loading';
import { RootState } from 'redux/types';
import { setGameID } from 'redux/counterSlice';
import { platformIcons } from 'pages/Games/GameList/constants';
import {
  GameListWrapper,
  GameWrapper,
  BackgroundImage,
  Info,
  Price,
  PlatformIcons,
  GameName,
} from 'pages/Games/GameList/styles';

function GameList() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.harbor.games);

  return (
    <GameListWrapper games={games}>
      {games[0].id === -1 ? (
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
                {/* <Price>
                  <span>Add to cart +</span> $ {game.price}
                </Price> */}
                <PlatformIcons>
                  {game.parent_platforms.map((platform) => (
                    <span key={uniqid()}>
                      {platformIcons[platform.platform.slug]}
                    </span>
                  ))}
                </PlatformIcons>
                <GameName
                  to="game"
                  onClick={() => {
                    dispatch(setGameID(game.id));
                  }}
                >
                  {game.name}
                </GameName>
              </Info>
            </GameWrapper>
          ))}
        </>
      )}
    </GameListWrapper>
  );
}

export default GameList;
