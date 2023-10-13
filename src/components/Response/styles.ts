import styled, { css } from 'styled-components'
import { TextT } from 'components/Response/types'

export const Text = styled.p<TextT>(
  ({ theme, isError }) => css`
    z-index: 2;
    position: fixed;
    bottom: 30px;
    left: 50%;
    padding: 15px 20px;
    background-color: ${isError
      ? theme.colors.red[800]
      : theme.colors.green[800]};
    color: ${isError ? theme.colors.red[50] : theme.colors.green[50]};
    text-align: center;
    border-radius: 10px;
    transform: translateX(-50%);
    backdrop-filter: blur(5px);
  `,
)
