import styled, { css } from 'styled-components'

export const AddGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

export const Header = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSizes['2xl']};
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
