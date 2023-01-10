import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './Cart';
import logo from '../assets/logo.png';
import { ReactComponent as Bag } from '../assets/shopping-bag.svg';
import { ReactComponent as MagnifyGlass } from '../assets/magnify.svg';

function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const openAndHideCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <>
      <HeaderWrapper>
        <LogoWrapper as={Link} to="/">
          <Logo src={logo} alt="Logo" />
          <div>Game Harbor</div>
        </LogoWrapper>
        <InputWrapper>
          <Input />
          <MagnifyGlass />
        </InputWrapper>
        <CartWrapper onClick={openAndHideCart}>
          <Bag />
          <div>Cart: 10</div>
        </CartWrapper>
      </HeaderWrapper>
      {isOpenCart && <Cart />}
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  padding: 0 40px;
  background-color: transparent;
  color: white;

  svg {
    height: 25px;
    width: 25px;
    fill: white;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoWrapper = styled(InputWrapper)`
  font-size: 26px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 50px;
`;

const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

const CartWrapper = styled(InputWrapper)`
  cursor: pointer;
`;

export default Header;
