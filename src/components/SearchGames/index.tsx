import { CircularProgress } from 'react-cssfx-loading';
import uniqid from 'uniqid';
import useSearchGames from 'components/SearchGames/useSearchGames';
import {
  SearchGamesWrapper,
  GameWrapper,
  BackgroundImage,
  GameName,
} from 'components/SearchGames/styles';

function SearchGames() {
  const { games, handleOnClick } = useSearchGames();

  return (
    <SearchGamesWrapper games={games}>
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
            <GameWrapper
              key={uniqid()}
              to="games/game"
              onClick={() => handleOnClick(game.id)}
            >
              <BackgroundImage
                style={{ backgroundImage: `url(${game.background_image})` }}
              />
              <GameName>{game.name}</GameName>
            </GameWrapper>
          ))}
        </>
      )}
    </SearchGamesWrapper>
  );
}

export default SearchGames;
