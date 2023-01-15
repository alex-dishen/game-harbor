import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useScrollDirection } from '../utils/customHooks';
import Cart from './Cart';
import logo from '../assets/logo.png';
import { ReactComponent as Bag } from '../assets/shopping-bag.svg';
import { ReactComponent as MagnifyGlass } from '../assets/magnify.svg';

interface Props {
  isChangeNavbar: boolean;
}

interface HeaderProps {
  scrollDirection: string;
  location: string;
  isChangeNavbar: boolean;
}

function Header({ isChangeNavbar }: Props) {
  const formControls = useAnimation();
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const [isOpenCart, setIsOpenCart] = useState(false);

  const setFormMaxWidth = (width: number) => {
    formControls.start({ maxWidth: width });
  };

  const openAndHideCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <>
      <HeaderWrapper
        scrollDirection={scrollDirection}
        location={location.pathname}
        isChangeNavbar={isChangeNavbar}
      >
        <LogoWrapper as={Link} to="/">
          <Logo src={logo} alt="Logo" />
          <div>Game Harbor</div>
        </LogoWrapper>
        <InputWrapper initial={{ maxWidth: 240 }} animate={formControls}>
          <Input
            onFocus={() => setFormMaxWidth(400)}
            onBlur={() => setFormMaxWidth(240)}
          />
          <MagnifyGlass />
        </InputWrapper>
        <CartWrapper onClick={openAndHideCart}>
          <Bag />
          <div>Cart: 10</div>
        </CartWrapper>
      </HeaderWrapper>
      <AnimatePresence>
        {isOpenCart && (
          <Cart isOpenCart={isOpenCart} openAndHideCart={openAndHideCart} />
        )}
      </AnimatePresence>
    </>
  );
}

const HeaderWrapper = styled.header<HeaderProps>`
  position: ${(props) => (props.location === '/games' ? 'sticky' : 'block')};
  /* z-index is getting changed to not appear
  when menu is opened on smaller screens */
  z-index: ${(props) => (props.isChangeNavbar ? '2' : '2')};
  top: ${(props) =>
    props.scrollDirection === 'down' && props.location === '/games'
      ? '-90px'
      : '0'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  gap: 20px;
  padding: 20px 40px;
  background-color: ${(props) =>
    props.location === '/games' ? 'rgb(15, 16, 17)' : 'transparent'};
  color: white;
  transition: 0.5s;

  svg {
    height: 25px;
    width: 25px;
    fill: white;
  }

  @media (max-width: 670px) {
    gap: 16px;
  }
`;

const InputWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 670px) {
    svg {
      display: none;
    }
  }
`;

const LogoWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  font-size: 26px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 670px) {
    div {
      display: none;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

const CartWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 670px) {
    svg {
      display: block;
    }

    div {
      display: none;
    }
  }
`;

export default Header;
