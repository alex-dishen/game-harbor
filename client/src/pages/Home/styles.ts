import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled(motion.main)(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 30px 40px;

    @media (max-width: ${theme.breakpoints.lg}) {
      flex-direction: column;
      justify-content: center;
      gap: 25px;
    }
  `,
)

export const Video = styled(motion.video)`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
