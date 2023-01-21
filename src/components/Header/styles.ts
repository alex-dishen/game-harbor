import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrollDirection: string;
  isModifyHeader: boolean;
  isChangeNavbar: boolean;
}

const HeaderWrapper = styled.header<HeaderProps>`
  position: ${({ isModifyHeader }) => (isModifyHeader ? 'sticky' : 'block')};
  z-index: 2;
  top: ${({ scrollDirection, isModifyHeader }) =>
    scrollDirection === 'down' && isModifyHeader ? '-90px' : '0'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  gap: 20px;
  padding: 20px 40px;
  background-color: ${(props) =>
    props.isModifyHeader ? 'rgb(15, 16, 17)' : 'transparent'};
  color: white;
  transition: top 0.5s;

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

export { HeaderWrapper, InputWrapper, LogoWrapper, Logo, Input, CartWrapper };
