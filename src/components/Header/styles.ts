import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { HeaderWrapperTypes } from 'components/Header/types';
import { ReactComponent as MagnifyingGlass } from 'assets/images/magnify.svg';

export const HeaderWrapper = styled.header<HeaderWrapperTypes>(
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

    @media (max-width: 760px) {
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

  @media (max-width: 760px) {
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

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const CartWrapper = styled(InputWrapper)`
  position: relative;
  flex-shrink: 0;
  width: fit-content;
  background-color: transparent;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  height: 6px;
  width: 6px;
  background-color: #18b0ab;
  border-radius: 50%;
`;
