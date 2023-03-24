import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useHeader from 'components/Header/useHeader';
import Cart from 'components/Cart';
import SearchGames from 'components/SearchGames';
import logo from 'assets/logo.png';
import {
  HeaderWrapper,
  InputWrapper,
  LogoWrapper,
  Logo,
  Input,
  MagnifyGlass,
  CartWrapper,
  Bag,
} from 'components/Header/styles';

function Header() {
  const {
    scrollDirection,
    isModifyHeader,
    isChangeSidebar,
    isHideSidebar,
    inputControls,
    isOpenCart,
    inputWrapperRef,
    isOpenSearchGames,
    handleOnChange,
    handleKeyPress,
    openAndHideCart,
    handleOnFocus,
    handleSearchedGames,
  } = useHeader();

  return (
    <>
      <HeaderWrapper
        scrollDirection={scrollDirection}
        isModifyHeader={isModifyHeader}
        isChangeSidebar={isChangeSidebar}
        isHideSidebar={isHideSidebar}
      >
        <LogoWrapper as={Link} to="/">
          <Logo src={logo} alt="Logo" />
          <div>Game Harbor</div>
        </LogoWrapper>
        <InputWrapper
          ref={inputWrapperRef}
          initial={{ maxWidth: 300 }}
          animate={inputControls}
        >
          <Input
            onFocus={handleOnFocus}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
          />
          <MagnifyGlass onClick={handleSearchedGames} />

          {isOpenSearchGames && <SearchGames />}
        </InputWrapper>
        {/* <CartWrapper onClick={openAndHideCart}>
          <Bag />
          <div>Cart: 10</div>
        </CartWrapper> */}
      </HeaderWrapper>
      <AnimatePresence>
        {isOpenCart && (
          <Cart isOpenCart={isOpenCart} openAndHideCart={openAndHideCart} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
