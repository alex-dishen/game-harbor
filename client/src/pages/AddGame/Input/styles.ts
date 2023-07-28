import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
`

export const StyledInput = styled.input(
  ({ theme }) => css`
    width: 100%;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;

    ::placeholder {
      color: ${theme.colors.white[100]};
    }
  `,
)

export const IconHolder = styled.button`
  display: flex;
  padding: 0;
`
