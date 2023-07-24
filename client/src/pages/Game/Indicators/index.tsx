import usePrice from 'pages/Game/Indicators/useIndicators'
import { StyledPrice, Status } from 'pages/Game/Indicators/styles'
import { ReactComponent as Check } from 'assets/images/check.svg'
import { handleAddToCart } from 'helpers'

const Price = () => {
  const { games, gameID, isInCart, gamePrice, inCartGames, dispatch } =
    usePrice()

  return (
    <StyledPrice>
      <span>${gamePrice}</span>
      <Status
        isInCart={isInCart}
        onClick={() =>
          isInCart || handleAddToCart({ gameID, games, inCartGames, dispatch })
        }
      >
        {isInCart ? (
          <>
            Added <Check />
          </>
        ) : (
          'Add to cart +'
        )}
      </Status>
    </StyledPrice>
  )
}

export default Price
