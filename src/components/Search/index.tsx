import { CircularProgress } from 'react-cssfx-loading';
import uniqid from 'uniqid';
import { useTheme } from 'styled-components';
import useSearchGames from 'components/Search/useSearchGames';
import {
  SearchGamesWrapper,
  GameWrapper,
  BackgroundImage,
  GameName,
} from 'components/Search/styles';

function SearchGames() {
  const { games, handleOnClick } = useSearchGames();
  const theme = useTheme();

  return (
    <SearchGamesWrapper games={games}>
      {games.length === 0 ? (
        <CircularProgress
          color={theme.colors.teal.teal100}
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
              <BackgroundImage src={game.background_image} />
              <GameName>{game.name}</GameName>
            </GameWrapper>
          ))}
        </>
      )}
    </SearchGamesWrapper>
  );
}

export default SearchGames;
