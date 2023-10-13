import styled, { css } from 'styled-components'

export const StyledTop = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;

    @media (max-width: ${theme.breakpoints.md}) {
      align-items: center;
    }
  `,
)

export const FilterName = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSizes['4xl']};
    font-weight: 800;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['2xl']};
    }
  `,
)

export const OrderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`

export const Order = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 15px;
    background-color: ${theme.colors.black[150]};
    background-color: white;
    color: black;
    border-radius: 10px;

    span {
      font-weight: 700;
    }
  `,
)

export const OptionWrapper = styled.ul(
  ({ theme }) => css`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 10px;
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 10px;

    li {
      padding: 3px 8px;
      border-radius: 7px;
      transition: 0.2s;

      &:hover {
        background-color: ${theme.colors.white[250]};
      }
    }
  `,
)

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  svg {
    fill: green;
  }
`
