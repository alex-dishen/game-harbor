import GameHeader from 'pages/Game/GameHeader'
import Carousel from 'pages/Game/Carousel'
import Info from 'pages/Game/Info'
import Price from 'pages/Game/Indicators'
import useGame from 'pages/Game/useGame'
import { GameWrapper, Main } from 'pages/Game/styles'

const Game = () => {
  useGame()

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
  )
}

export default Game
