import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { StyledGamePageTypes, OverflowTypes } from 'pages/Games/types'

const StyledGamePage = styled(motion.main)<StyledGamePageTypes>(
  ({ GAMES, theme }) => css`
    ${GAMES?.length === 0 && {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    display: flex;
    gap: 45px;
    padding: 0px 30px;
    color: white;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 25px 0px;
    }
  `,
)

const MenuHolder = styled.div`
  position: fixed;
  z-index: 6;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  svg {
    height: 28px;
    width: 28px;
  }
`

export const Overflow = styled(MenuHolder)<OverflowTypes>(
  ({ isHideSidebar }) => css`
    z-index: 5;
    bottom: 20px;
    right: 20px;
    height: 40px;
    width: 40px;
    transform: scale(${isHideSidebar ? '1' : '72'});
    transition: 1.5s;
  `,
)

const Content = styled.div(
  ({ theme }) => css`
    flex: 1;
    padding: 0 15px 10px 15px;
    padding-bottom: 30px;
    overflow: auto;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 35px 10px 35px;
    }
  `,
)

export { StyledGamePage, MenuHolder, Content }
