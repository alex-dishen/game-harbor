import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../assets/arrow-left.svg';

function GameHeader() {
  return (
    <Header>
      <BackButton to="/games" relative="path">
        <ArrowLeft /> Store
      </BackButton>
      <GameName>Game Name</GameName>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media (max-width: 700px) {
    a {
      font-size: 18px;
    }

    svg {
      height: 25px;
    }

    span {
      font-size: 28px;
    }
  }
`;

const BackButton = styled(Link)`
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

const GameName = styled.span`
  font-size: 46px;
  font-weight: 800;
`;

export default GameHeader;
