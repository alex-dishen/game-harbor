import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useHeader from 'components/Header/useHeader';
import Cart from 'components/Cart';
import SearchGames from 'components/Search';
import logo from 'assets/images/logo.png';
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  InputWrapper,
  Input,
  MagnifyGlass,
  Navigation,
  CartWrapper,
  Circle,
} from 'components/Header/styles';
import { ReactComponent as CartSVG } from 'assets/images/cart.svg';
import { ReactComponent as Divider } from 'assets/images/divider.svg';
import { ReactComponent as Plus } from 'assets/images/plus.svg';

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
    openCart,
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
        <Navigation>
          <Plus />
          <Divider />
          <CartWrapper onClick={openCart}>
            <CartSVG />
            {inCartGames.length > 0 && <Circle />}
          </CartWrapper>
        </Navigation>
      </HeaderWrapper>
      <AnimatePresence>{isOpenCart && <Cart />}</AnimatePresence>
    </>
  );
}

export default Header;
