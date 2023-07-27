import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const CartWrapper = styled(motion.div)(
  ({ theme }) => css`
    z-index: 3;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 360px;
    padding: 30px;
    background-color: ${theme.colors.black[200]};
    color: ${theme.colors.white[50]};

    @media (max-width: ${theme.breakpoints.md}) {
      width: 280px;
    }
  `,
)

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NumberOfGames = styled.h3(
  ({ theme }) => css`
    margin: 0;
    color: white;
    font-size: ${theme.fontSizes.md};
    font-weight: 800;
  `,
)

export const ClearButton = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
`

export const ChosenGames = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  overflow: auto;
`

export const GameHolder = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 13px;
    background-color: ${theme.colors.black[150]};
    border-radius: 10px;

    @media (max-width: ${theme.breakpoints.md}) {
      gap: 10px;
    }
  `,
)

export const Details = styled(Link)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-decoration: none;

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      align-items: flex-end;
    }
  `,
)

export const Image = styled.img(
  ({ theme }) => css`
    flex-shrink: 0;
    height: 90px;
    width: 130px;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 120px;
      width: 100%;
    }
  `,
)

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Detail = styled.p(
  ({ theme }) => css`
    margin: 0;
    text-align: end;
    color: ${theme.colors.white[50]};

    &:first-child {
      color: white;
    }
  `,
)

export const Cross = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    height: 22px;
    width: 22px;
    background-color: ${theme.colors.black[250]};
    border-radius: 50%;
    cursor: pointer;
  `,
)

export const TotalPrice = styled.footer`
  color: inherit;
`

export const Overlay = styled(motion.div)`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
`
