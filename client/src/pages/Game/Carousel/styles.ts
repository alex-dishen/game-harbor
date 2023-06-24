import styled, { css, keyframes } from 'styled-components'
import Swipi from 'swipi'

const leftToRightBackground = keyframes`
  from {
    background-position: -240% 0;
  } to {
    background-position: 340% 0;
  }
`

export const StyledSlider = styled(Swipi)(
  ({ theme }) => css`
    min-height: 445px;
    background: linear-gradient(
      90deg,
      rgba(46, 46, 46, 1) 0%,
      rgba(73, 73, 73, 0.6) 50%,
      rgba(46, 46, 46, 1) 100%
    );
    background-color: ${theme.colors.black[200]};
    border-radius: 30px;
    background-size: 70% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    animation: ${leftToRightBackground} 3.4s linear infinite;

    grid-area: images;

    .swipi-container {
      display: flex;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    button {
      z-index: 1;
      position: absolute;
      height: 100%;

      svg {
        height: 45px;
        width: 45px;
      }
    }

    .right-button {
      right: 0;
    }

    .dots-wrapper {
      position: absolute;
      bottom: 20px;
      padding: 14px 18px;
      background-color: ${theme.colors.black[250]};
      border-radius: 10px;
    }
  `,
)

export const ImageHolder = styled.div`
  display: flex;
  height: 100%;
`

export const Image = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
`
