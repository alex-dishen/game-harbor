import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 235px;
  padding: 15px 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Header = styled.h3`
  margin: 0;
  color: white;
  font-size: 22px;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`;

export const StyledLink = styled(Link)`
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
    background-color: rgb(106, 190, 187);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
