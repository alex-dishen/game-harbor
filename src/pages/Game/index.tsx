import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setGameSpecification, setGameScreenshots } from 'redux/counterSlice';
import GameHeader from 'pages/Game/GameHeader';
import Carousel from 'pages/Game/Carousel';
import Info from 'pages/Game/Info';
import Price from 'pages/Game/Price';
import { getGameDetails, getGameScreenshots } from 'api/gameData';
import { GameWrapper, Main } from 'pages/Game/styles';

function Game() {
  const dispatch = useDispatch();
  const gameID = useSelector((state: RootState) => state.harbor.gameID);

  const setGameDetails = async () => {
    const details = await getGameDetails(gameID);
    const screenshots = await getGameScreenshots(gameID);
    dispatch(setGameSpecification(details));
    dispatch(setGameScreenshots(screenshots));
  };

  setGameDetails();

  return (
    <GameWrapper
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, x: -25 }}
    >
      <GameHeader />
      <Main>
        <Carousel />
        <Info />
        <Price />
      </Main>
    </GameWrapper>
  );
}

export default Game;
