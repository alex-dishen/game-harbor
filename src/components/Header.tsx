import styled from 'styled-components';
import logo from '../assets/logo.png';
import { ReactComponent as ShoppingBag } from '../assets/shopping-bag.svg';
import { ReactComponent as MagnifyLoop } from '../assets/magnify.svg';

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Logo" />
        <div>Game Harbor</div>
      </LogoWrapper>
      <InputWrapper>
        <Input />
        <MagnifyGlass />
      </InputWrapper>
      <CartWrapper>
        <Bag />
        <div>Cart: 10</div>
      </CartWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: absolute;
  top: 20px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoWrapper = styled(InputWrapper)`
  font-size: 26px;
  font-weight: 500;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 50px;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: 'Search games...',
}))`
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 8px;
`;

const MagnifyGlass = styled(MagnifyLoop)`
  height: 25px;
  width: 25px;
  fill: white;
`;

const CartWrapper = styled(InputWrapper)`
  cursor: pointer;
`;

const Bag = styled(ShoppingBag)`
  height: 25px;
  width: 25px;
  fill: white;
`;

export default Header;
