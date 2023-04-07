import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  color: white;

  @media (max-width: 700px) {
    a {
      font-size: 18px;
    }

    svg {
      height: 25px;
    }
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(204, 204, 204);
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  svg {
    height: 25px;
    width: 25px;
  }

  &:hover {
    color: rgb(24, 176, 171);

    svg {
      fill: rgb(24, 176, 171);
    }
  }
`;

export const GameName = styled.span`
  font-size: 46px;
  font-weight: 800;
  word-break: keep-all;
  text-align: end;

  @media (max-width: 700px) {
    font-size: 28px;
  }

  @media (max-width: 460px) {
    font-size: 22px;
  }
`;
