import styled, { css } from 'styled-components'
import { ButtonT } from 'pages/AddGame/ButtonGroup/types'

export const Button = styled.button<ButtonT>(
  ({ color }) => css`
    padding: 12px 60px;
    background-color: ${color};
    color: white;
    border-radius: 10px;
  `,
)
