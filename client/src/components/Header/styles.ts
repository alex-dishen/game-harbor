/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { HeaderWrapperTypes } from 'components/Header/types'
import { ReactComponent as MagnifyingGlass } from 'assets/images/magnify.svg'

export const HeaderWrapper = styled.header<HeaderWrapperTypes>(
  ({
    isModifyHeader,
    scrollDirection,
    isHideSidebar,
    isChangeSidebar,
    theme,
  }) => css`
    position: ${isModifyHeader ? 'sticky' : 'block'};
    z-index: ${!isHideSidebar && isChangeSidebar ? -1 : 2};
    top: ${scrollDirection === 'down' && isModifyHeader ? '-90px' : '0'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    gap: 20px;
    padding: 20px 40px;
    background-color: ${isModifyHeader
      ? theme.colors.black[250]
      : 'transparent'};
    color: white;
    transition: top 0.5s;

    @media (max-width: ${theme.breakpoints.md}) {
      gap: 16px;
    }
  `,
)

export const InputWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`

export const LogoWrapper = styled(InputWrapper)(
  ({ theme }) => css`
    flex-shrink: 0;
    width: fit-content;
    font-size: ${theme.fontSizes.lg};
    font-weight: 500;
    background-color: transparent;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: ${theme.breakpoints.md}) {
      div {
        display: none;
      }
    }
  `,
)

export const Logo = styled.img`
  height: 50px;
`

export const Input = styled.input.attrs(() => ({
  placeholder: 'Search games...',
}))`
  width: 100%;
  padding: 8px 0px 8px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
`

export const MagnifyGlass = styled(MagnifyingGlass)(
  ({ theme }) => css`
    height: 25px;
    width: 25px;
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `,
)
