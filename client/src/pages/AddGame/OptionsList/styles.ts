import styled, { css } from 'styled-components'
import { OptionsHolderT } from 'pages/AddGame/OptionsList/types'

export const OptionsHolder = styled.ul<OptionsHolderT>(
  ({ alignToStart }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${alignToStart ? '' : 'center'};
    gap: 5px;
    width: 100%;
    margin: ${alignToStart ? '0' : '10px 0'};
    padding: 0;
    list-style: none;
  `,
)

export const ListOption = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  cursor: pointer;

  svg {
    fill: white;
    height: 15px;
  }
`
