import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { IHeaderWrapper } from 'components/Header/interfaces';
import { ReactComponent as ShoppingBag } from 'assets/shopping-bag.svg';
import { ReactComponent as MagnifyingGlass } from 'assets/magnify.svg';

export const HeaderWrapper = styled.header<IHeaderWrapper>(
  ({ isModifyHeader, scrollDirection, isHideSidebar, isChangeSidebar }) => css`
    position: ${isModifyHeader ? 'sticky' : 'block'};
    z-index: ${!isHideSidebar && isChangeSidebar ? -1 : 2};
    top: ${scrollDirection === 'down' && isModifyHeader ? '-90px' : '0'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    gap: 20px;
    padding: 20px 40px;
    background-color: ${isModifyHeader ? 'rgb(15, 16, 17)' : 'transparent'};
    color: white;
    transition: top 0.5s;

    @media (max-width: 670px) {
      gap: 16px;
    }
  `
);

export const InputWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;

export const LogoWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  font-size: 26px;
  font-weight: 500;
  background-color: transparent;
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

export const Logo = styled.img`
  height: 50px;
`;

export const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  width: 100%;
  padding: 8px 0px 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

export const MagnifyGlass = styled(MagnifyingGlass)`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 670px) {
    display: none;
  }
`;

export const CartWrapper = styled(InputWrapper)`
  flex-shrink: 0;
  width: fit-content;
  background-color: transparent;
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

export const Bag = styled(ShoppingBag)`
  height: 25px;
  width: 25px;
  fill: white;
`;
