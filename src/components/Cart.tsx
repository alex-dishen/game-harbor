import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  isOpenCart: boolean;
  openAndHideCart: () => void;
}

function Cart({ isOpenCart, openAndHideCart }: Props) {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (isOpenCart && !cartRef.current?.contains(e.target as HTMLElement)) {
        openAndHideCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <CartWrapper
        ref={cartRef}
        initial={{ x: 360 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
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

const CartWrapper = styled(motion.div)`
  z-index: 2;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 360px;
  padding: 30px;
  background-color: rgb(26, 26, 26);
  color: rgb(153, 153, 153);

  @media (max-width: 565px) {
    width: 280px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: white;
    font-size: 24px;
    font-weight: 800;
  }

  button {
    background-color: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
  }
`;

const ChosenGames = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  overflow: scroll;
`;

// const GameHolder = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 13px;
//   background-color: rgb(38, 38, 38);
//   border-radius: 10px;

//   & > div:first-child {
//     color: white;
//   }

//   & > div:last-child {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//   }
// `;

// const Cross = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 22px;
//   width: 22px;
//   background-color: rgb(64, 64, 64);
//   border-radius: 50%;
//   cursor: pointer;
// `;

const TotalPrice = styled.footer`
  color: inherit;
`;

const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
`;

export default Cart;
