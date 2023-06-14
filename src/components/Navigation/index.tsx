import { Link } from 'react-router-dom';
import { useNavigation } from 'components/Navigation/useNavigation';
import {
  StyledNavigation,
  CartWrapper,
  Circle,
} from 'components/Navigation/styles';
import { ReactComponent as Divider } from 'assets/images/divider.svg';
import { ReactComponent as CartSVG } from 'assets/images/cart.svg';
import { ReactComponent as Plus } from 'assets/images/plus.svg';

const Navigation = () => {
  const { location, inCartGames, openCart } = useNavigation();

  return (
    <StyledNavigation darkenImages={location.pathname === '/add-game'}>
      <Link to="/add-game">
        <Plus />
      </Link>
      <Divider />
      <CartWrapper
        darkenImages={location.pathname === '/add-game'}
        onClick={openCart}
      >
        <CartSVG />
        {inCartGames.length > 0 && <Circle />}
      </CartWrapper>
    </StyledNavigation>
  );
};

export default Navigation;
