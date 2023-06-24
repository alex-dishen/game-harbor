import styled, { css } from 'styled-components'

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Pitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: clamp(350px, 70vw, 515px);
  padding: 20px 30px;

  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 20px;
  backdrop-filter: blur(7px);

  p {
    margin: 0;
  }
`

export const Header = styled.h1(
  ({ theme }) => css`
    margin: 0;
    text-align: center;
    font-size: ${theme.fontSizes['3xl']};
    font-weight: 800;
  `,
)

export const EnjoyBlock = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: 5px;

    p:last-child {
      font-size: ${theme.fontSizes.sm};
    }
  `,
)

export const Links = styled(Pitch)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding: 10px 0;
  border-radius: 15px;

  svg {
    height: 22px;
    width: 22px;
  }
`

export const Link = styled.a(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background-color: white;
    color: black;
    text-decoration: none;
    border-radius: 12px;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.teal[50]};
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  `,
)

export const RAWGLogo = styled.img`
  height: 20px;
`
