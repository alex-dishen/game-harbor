import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAnimation, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../utils/customHooks';
import Cart from '../Cart/Cart';
import logo from '../../assets/logo.png';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
import { ReactComponent as MagnifyGlass } from '../../assets/magnify.svg';
import {
  HeaderWrapper,
  InputWrapper,
  LogoWrapper,
  Logo,
  Input,
  CartWrapper,
} from './styles';

interface Props {
  isChangeNavbar: boolean;
}

function Header({ isChangeNavbar }: Props) {
  const formControls = useAnimation();
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isModifyHeader, setIsModifyHeader] = useState(false);

  // It is needed to hide header color change when switching between pages
  useEffect(() => {
    if (location.pathname === '/games') {
      setTimeout(() => {
        setIsModifyHeader(true);
      }, 400);
    } else {
      setIsModifyHeader(false);
    }
  }, [location]);

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
        isModifyHeader={isModifyHeader}
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

export default Header;
