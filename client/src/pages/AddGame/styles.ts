import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const AddGameWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

export const Header = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSizes['3xl']};
    text-align: center;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.xl};
    }
  `,
)

export const InputsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  p {
    margin: 0;
  }
`

export const Star = styled.span(
  ({ theme }) => css`
    color: ${theme.colors.blue[50]};
  `,
)
