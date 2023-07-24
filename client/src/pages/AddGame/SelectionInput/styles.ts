import styled, { css } from 'styled-components'

export const SelectionBody = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: ${theme.breakpoints.sm}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
)

export const AddButton = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    align-self: flex-start;
    flex-shrink: 0;
    gap: 10px;
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    color: ${theme.colors.white[100]};
    cursor: pointer;

    &,
    svg {
      transition: 300ms;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.8);

      svg {
        fill: rgba(255, 255, 255, 0.8);
      }
    }
  `,
)

export const DescriptionHolder = styled.div`
  display: flex;
  gap: 5px;
`
