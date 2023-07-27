import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { MoreButtonTypes } from 'pages/Game/Info/types'

export const StyledInfo = styled.div`
  grid-area: info;
`

export const Description = styled.div(
  ({ theme }) => css`
    max-height: 300px;
    padding: 20px 20px 0px 20px;
    background: linear-gradient(
      90deg,
      rgba(26, 26, 26, 0) 0%,
      rgba(26, 26, 26, 1) 100%
    );
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: auto;
    color: ${theme.colors.white[150]};
    box-shadow: 0 0 20px rgb(10, 10, 10);
    clip-path: inset(0px 0px -30px 0px);

    &::after {
      position: absolute;
      content: '';
      height: 45px;
      margin-top: -25px;
      width: 110%;
      display: block;
      position: sticky;
      bottom: -1px;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgb(15, 15, 15)
      );
      pointer-events: none;
    }

    div {
      margin: 15px 0;
      color: white;
      font-size: ${theme.fontSizes.sm};
      font-weight: 600;
    }
  `,
)

export const MoreInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(
    90deg,
    rgba(38, 38, 38, 0) 0%,
    rgba(38, 38, 38, 1) 100%
  );
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`

export const Details = styled(motion.ul)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0;
    color: ${theme.colors.white[50]};
    list-style: none;
    overflow: auto;

    li {
      display: flex;
      gap: 7px;

      a {
        word-break: break-all;
        text-decoration: none;
        color: ${theme.colors.white[50]};
      }
    }
  `,
)

export const MoreButton = styled.div<MoreButtonTypes>(
  ({ showMoreInfo, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    padding-top: ${showMoreInfo ? '5px' : '0'};
    color: ${theme.colors.white[150]};
    cursor: pointer;
    transition: 0.3s;

    svg {
      height: 20px;
    }

    &:hover {
      color: white;

      svg {
        fill: white;
      }
    }
  `,
)
