import { Header, BackButton, GameName } from 'pages/Game/GameHeader/styles';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

interface GameHeaderProps {
  gameName: string | undefined;
}

function GameHeader({ gameName }: GameHeaderProps) {
  return (
    <Header>
      <BackButton to="/games" relative="path">
        <ArrowLeft /> Store
      </BackButton>
      <GameName>{gameName}</GameName>
    </Header>
  );
}

export default GameHeader;
