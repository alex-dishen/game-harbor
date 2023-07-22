import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useTheme } from 'styled-components'
import { CircularProgress } from 'react-cssfx-loading'
import useGameList from 'pages/Games/GameList/useGameList'
import { platformIcons } from 'pages/Games/GameList/constants'
import { handleAddToCart } from 'helpers'
import {
  GameListWrapper,
  GameWrapper,
  Image,
  Info,
  Price,
  AddToCart,
  PlatformIcons,
  GameName,
} from 'pages/Games/GameList/styles'
import { ReactComponent as Check } from 'assets/images/check.svg'

const GameList = () => {
  const { games, inCartGames, dispatch, handleNavigation } = useGameList()
  const theme = useTheme()

  return (
    <GameListWrapper games={games}>
      {/* games[0].id === -1 appears after user changes filter.
          To prevent the spinner from being displayed on the entire
          page when refetching data the games are set to a predefined
          array to show the spinner only on gamesList section */}
      {games[0].id === -1 ? (
        <CircularProgress
          color={theme.colors.teal[100]}
          height="80px"
          width="80px"
          duration="2s"
        />
      ) : (
        <>
          {games.map(
            ({
              id,
              background_image,
              isInCart,
              price,
              parent_platforms,
              name,
            }) => (
              <GameWrapper key={nanoid()}>
                <Link to="game" onClick={() => handleNavigation(id)}>
                  <Image src={background_image} />
                </Link>
                <Info>
                  <Price>
                    <AddToCart
                      isInCart={isInCart}
                      onClick={() =>
                        isInCart ||
                        handleAddToCart({
                          gameID: id,
                          games,
                          inCartGames,
                          dispatch,
                        })
                      }
                    >
                      {isInCart ? (
                        <>
                          Added <Check />
                        </>
                      ) : (
                        'Add to cart +'
                      )}
                    </AddToCart>
                    ${price}
                  </Price>
                  <PlatformIcons>
                    {parent_platforms.map(({ slug }) => (
                      <span key={nanoid()}>{platformIcons[slug]}</span>
                    ))}
                  </PlatformIcons>
                  <GameName to="game" onClick={() => handleNavigation(id)}>
                    {name}
                  </GameName>
                </Info>
              </GameWrapper>
            ),
          )}
        </>
      )}
    </GameListWrapper>
  )
}

export default GameList
