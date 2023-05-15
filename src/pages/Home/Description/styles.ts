import styled from 'styled-components';

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Pitch = styled.div`
  width: clamp(350px, 57vw, 500px);
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  color: white;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 60px;
    font-weight: 800;
  }

  p {
    margin: 0;

    span {
      color: rgb(24, 230, 223);
      cursor: pointer;
    }
  }
`;

export const Links = styled(Pitch)`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 8px 0;
  border-radius: 20px;

  svg {
    height: 22px;
    width: 22px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background-color: white;
  color: black;
  text-decoration: none;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(106, 190, 187);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const RAWGLogo = styled.img`
  height: 20px;
`;
