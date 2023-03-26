import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useHeader from 'components/Header/useHeader';
import Cart from 'components/Cart';
import SearchGames from 'components/SearchGames';
import logo from 'assets/logo.png';
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  InputWrapper,
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
    inCartGames,
    handleOnChange,
    handleKeyDown,
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
            onKeyDown={handleKeyDown}
          />
          <MagnifyGlass onClick={handleSearchedGames} />

          {isOpenSearchGames && <SearchGames />}
        </InputWrapper>
        <CartWrapper onClick={openAndHideCart}>
          <Bag />
          <div>Cart: {inCartGames.length}</div>
        </CartWrapper>
      </HeaderWrapper>
      <AnimatePresence>{isOpenCart && <Cart />}</AnimatePresence>
    </>
  );
}

export default Header;
