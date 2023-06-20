import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(7px);

  svg {
    height: 20px;
    width: 20px;
  }
`

export const Header = styled.h3(
  ({ theme }) => css`
    margin: 0;
    color: white;
    font-size: ${theme.fontSizes.sm};
  `,
)

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 0;
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 16px;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      background-color: ${theme.colors.teal[50]};
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  `,
)
