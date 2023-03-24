import { useRef } from 'react';
import { useClickOutside } from 'utils/customHooks';
import {
  CartWrapper,
  Header,
  ChosenGames,
  TotalPrice,
  Overlay,
} from 'components/Cart/styles';

interface CartProps {
  isOpenCart: boolean;
  openAndHideCart: () => void;
}

function Cart({ isOpenCart, openAndHideCart }: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpenCart, cartRef, openAndHideCart);

  return (
    <>
      <CartWrapper
        ref={cartRef}
        initial={{ x: 360 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
        exit={{ x: 360 }}
      >
        <Header>
          <div>10 Games</div>
          <button type="button">Clear</button>
        </Header>
        <ChosenGames>
          {/* {chosenGames.map((game) => (
            <GameHolder>
              <div>{game.name}</div>
              <div>
                <div>{game.price}</div>
                <Cross>x</Cross>
              </div>
            </GameHolder>
          ))} */}
        </ChosenGames>
        <TotalPrice>Total: $243.32</TotalPrice>
      </CartWrapper>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      />
    </>
  );
}

export default Cart;
