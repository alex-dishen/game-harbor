import { v4 as uuidv4 } from 'uuid'
import { useTheme } from 'styled-components'
import { CircularProgress } from 'react-cssfx-loading'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { memo } from 'react'
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
  DeleteButton,
} from 'pages/Games/GameList/styles'
import { ReactComponent as Check } from 'assets/images/check.svg'
import { RootState } from 'redux/types'
import { FILTER_TITLE } from '../constants'

const GameList = () => {
  const { games, inCartGames, dispatch, onDeleteGame } = useGameList()
  const theme = useTheme()
  const currentFilter = useSelector(
    (state: RootState) => state.harbor.currentFilter,
  )

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
              <GameWrapper key={uuidv4()}>
                {currentFilter === FILTER_TITLE.ADDED_GAMES && (
                  <DeleteButton onClick={() => onDeleteGame(id)}>
                    x
                  </DeleteButton>
                )}
                <Link to={`game/${id}`}>
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
                      <span key={uuidv4()}>{platformIcons[slug]}</span>
                    ))}
                  </PlatformIcons>
                  <GameName to={`game/${id}`}>{name}</GameName>
                </Info>
              </GameWrapper>
            ),
          )}
        </>
      )}
    </GameListWrapper>
  )
}

export default memo(GameList)
