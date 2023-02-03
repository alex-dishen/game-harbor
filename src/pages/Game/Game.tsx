import GameHeader from 'pages/Game/GameHeader/GameHeader';
import Images from 'pages/Game/Images/Images';
import Info from 'pages/Game/Info/Info';
import Price from 'pages/Game/Price/Price';
import { GameWrapper, Main } from 'pages/Game/styles';

function Game() {
  return (
    <GameWrapper
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: -25 }}
    >
      <GameHeader />
      <Main>
        <Images />
        <Info />
        <Price />
      </Main>
    </GameWrapper>
  );
}

export default Game;
