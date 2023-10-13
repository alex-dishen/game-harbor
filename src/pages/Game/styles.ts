import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const GameWrapper = styled(motion.main)(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    padding: 0 40px 30px 40px;

    svg {
      fill: ${theme.colors.white[150]};
      transition: 0.3s;
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      height: fit-content;
      padding: 0 20px 30px 20px;
    }
  `,
)

export const Main = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: grid;
    grid-template: 1fr min-content / auto max(26vw, 300px);
    grid-template-areas:
      'images info'
      'images price';
    gap: 30px;

    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template: min-content min-content 1fr / 1fr;
      grid-template-areas:
        'images'
        'price'
        'info';
    }
  `,
)
