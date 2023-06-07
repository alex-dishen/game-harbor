import styled from 'styled-components';

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Pitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: clamp(350px, 57vw, 515px);
  padding: 20px 30px;

  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 20px;
  backdrop-filter: blur(7px);

  p {
    margin: 0;
  }
`;

export const Header = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 50px;
  font-weight: 800;
`;

export const EnjoyBlock = styled.div`
  display: flex;
  gap: 5px;

  p:last-child {
    font-size: 20px;
  }
`;

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
`;

export const Link = styled.a`
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
