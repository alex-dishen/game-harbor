import { CircularProgress } from 'react-cssfx-loading'
import { useTheme } from 'styled-components'
import useSearchGames from 'components/Search/useSearchGames'
import {
  SearchGamesWrapper,
  GameWrapper,
  BackgroundImage,
  GameName,
} from 'components/Search/styles'

const SearchGames = () => {
  const { games, handleOnClick } = useSearchGames()
  const theme = useTheme()

  return (
    <SearchGamesWrapper games={games}>
      {games.length === 0 ? (
        <CircularProgress
          color={theme.colors.teal[100]}
          height="80px"
          width="80px"
          duration="2s"
        />
      ) : (
        <>
          {games.map(game => (
            <GameWrapper
              key={game.id}
              to={`games/game/${game.id}`}
              onClick={handleOnClick}
            >
              <BackgroundImage src={game.background_image} />
              <GameName>{game.name}</GameName>
            </GameWrapper>
          ))}
        </>
      )}
    </SearchGamesWrapper>
  )
}

export default SearchGames
