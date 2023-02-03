import { Header, BackButton, GameName } from 'pages/Game/GameHeader/styles';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

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

export default GameHeader;
