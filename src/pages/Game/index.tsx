import { useEffect, useState } from 'react';
import GameHeader from 'pages/Game/GameHeader';
import Images from 'pages/Game/Images';
import Info from 'pages/Game/Info';
import Price from 'pages/Game/Price';
import getGameDetails from 'api/gameDetails';
import { IGame } from 'api/interfaces';
import { GameWrapper, Main } from 'pages/Game/styles';

interface GameProps {
  gameID: number;
}

function Game({ gameID }: GameProps) {
  const [gameSpecification, setGameSpecification] = useState<IGame>();

  const setGameDetails = async () => {
    const response = await getGameDetails(gameID);
    setGameSpecification(response);
  };

  useEffect(() => {
    setGameDetails();
  }, []);

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
        <Info description={gameSpecification?.description_raw} />
        <Price />
      </Main>
    </GameWrapper>
  );
}

export default Game;
