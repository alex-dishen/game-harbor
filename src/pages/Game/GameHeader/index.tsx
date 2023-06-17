import { useSelector } from 'react-redux';
import { RootState } from 'redux/types';
import { Header, BackButton, GameName } from 'pages/Game/GameHeader/styles';
import { ReactComponent as ArrowLeft } from 'assets/images/arrow-left.svg';
import { PATHS } from '../../../constants';

function GameHeader() {
  const gameName = useSelector(
    (state: RootState) => state.harbor.gameSpecification.name
  );

  return (
    <Header>
      <BackButton to={PATHS.games} relative="path">
        <ArrowLeft /> Harbor
      </BackButton>
      <GameName>{gameName}</GameName>
    </Header>
  );
}

export default GameHeader;
