import styled from 'styled-components';
import { motion } from 'framer-motion';
import GameHeader from './components/GameHeader';
import Images from './components/Images';
import Info from './components/Info';
import Price from './components/Price';

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

const GameWrapper = styled(motion.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px 40px 30px 40px;

  svg {
    fill: rgb(204, 204, 204);
    transition: 0.3s;
  }

  @media (max-width: 860px) {
    height: fit-content;
  }
`;

const Main = styled.div`
  flex: 1;
  display: grid;
  grid-template: 1fr min-content / auto max(26vw, 300px);
  grid-template-areas:
    'images info'
    'images price';
  gap: 30px;

  @media (max-width: 860px) {
    grid-template: 1.2fr min-content 1fr / 1fr;
    grid-template-areas:
      'images'
      'price'
      'info';
  }
`;

export default Game;
