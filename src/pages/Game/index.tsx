import { useEffect, useState } from 'react';
import GameHeader from 'pages/Game/GameHeader';
import Carousel from 'pages/Game/Carousel';
import Info from 'pages/Game/Info';
import Price from 'pages/Game/Price';
import getGameDetails from 'api/gameDetails';
import { IGame, ResponseSchema, IScreenshots } from 'api/interfaces';
import { GameWrapper, Main } from 'pages/Game/styles';
import getGameScreenshots from 'api/gameScreenshots';

interface GameProps {
  gameID: number;
}

function Game({ gameID }: GameProps) {
  const [gameSpecification, setGameSpecification] = useState<IGame>();
  const [gameScreenshots, setGameScreenshots] =
    useState<ResponseSchema<IScreenshots>>();

  const setGameDetails = async () => {
    const details = await getGameDetails(gameID);
    const screenshots = await getGameScreenshots(gameID);
    setGameSpecification(details);
    setGameScreenshots(screenshots);
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
      <GameHeader gameName={gameSpecification?.name} />
      <Main>
        <Carousel screenshots={gameScreenshots?.results} />
        <Info gameSpecification={gameSpecification} />
        <Price />
      </Main>
    </GameWrapper>
  );
}

export default Game;
