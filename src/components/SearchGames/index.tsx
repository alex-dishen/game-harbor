import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from 'react-cssfx-loading';
import uniqid from 'uniqid';
import { setGameID, setIsOpenSearchGames } from 'redux/counterSlice';
import { RootState } from 'redux/types';
import {
  SearchGamesWrapper,
  GameWrapper,
  BackgroundImage,
  GameName,
} from 'components/SearchGames/styles';

function SearchGames() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state: RootState) => state.harbor);
  const { searchedGames } = reduxState;
  const games = searchedGames.slice(0, 8);

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
              onClick={() => {
                dispatch(setGameID(game.id));
                dispatch(setIsOpenSearchGames(false));
              }}
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
