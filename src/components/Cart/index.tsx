import uniqid from 'uniqid';
import useCart from 'components/Cart/useCart';
import {
  CartWrapper,
  Header,
  ChosenGames,
  TotalPrice,
  Overlay,
  GameHolder,
  Cross,
  Image,
  Info,
  Details,
  Detail,
} from 'components/Cart/styles';

function Cart() {
  const {
    cartRef,
    inCartGames,
    clearInCartGames,
    deleteGame,
    returnGamesPriceSum,
  } = useCart();

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
          <div>{inCartGames.length} Games</div>
          <button type="button" onClick={clearInCartGames}>
            Clear
          </button>
        </Header>
        <ChosenGames>
          {inCartGames.map((game) => (
            <GameHolder key={uniqid()}>
              <Cross onClick={() => deleteGame(game.id)}>x</Cross>
              <Details>
                <Image src={game.background_image} />
                <Info>
                  <Detail>{game.name}</Detail>
                  <Detail>{game.price}</Detail>
                </Info>
              </Details>
            </GameHolder>
          ))}
        </ChosenGames>
        <TotalPrice>Total: $ {returnGamesPriceSum()}</TotalPrice>
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
