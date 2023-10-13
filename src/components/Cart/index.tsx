import useCart from 'components/Cart/useCart'
import {
  CartWrapper,
  Header,
  NumberOfGames,
  ClearButton,
  ChosenGames,
  TotalPrice,
  Overlay,
  GameHolder,
  Cross,
  Image,
  Info,
  Details,
  Detail,
} from 'components/Cart/styles'

const Cart = () => {
  const {
    cartRef,
    inCartGames,
    hideCart,
    deleteGame,
    clearInCartGames,
    returnGamesPriceSum,
  } = useCart()

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
          <NumberOfGames>{inCartGames.length} Games</NumberOfGames>
          <ClearButton type="button" onClick={clearInCartGames}>
            Clear
          </ClearButton>
        </Header>
        <ChosenGames>
          {inCartGames.map(({ id, background_image, name, price }) => (
            <GameHolder key={id}>
              <Cross onClick={() => deleteGame(id)}>x</Cross>
              <Details to={`games/game/${id}`} onClick={hideCart}>
                <Image src={background_image} />
                <Info>
                  <Detail>{name}</Detail>
                  <Detail>{price}</Detail>
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
  )
}

export default Cart
