import usePrice from 'pages/Game/Price/usePrice';
import { StyledPrice, Status } from 'pages/Game/Price/styles';
import { ReactComponent as Check } from 'assets/check.svg';
import { handleAddToCart } from 'utils/helpers';

function Price() {
  const { games, gameID, isInCart, gamePrice, dispatch } = usePrice();

  return (
    <StyledPrice>
      <span>{gamePrice}</span>
      <Status
        isInCart={isInCart}
        onClick={() => handleAddToCart(gameID, games, dispatch)}
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
  );
}

export default Price;
