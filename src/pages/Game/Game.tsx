import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import GameHeader from './components/GameHeader';
import Images from './components/Images';
import Info from './components/Info';
import Price from './components/Price';
import { changeParentHeight } from '../../utils/helpers';

function Game() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeParentHeight(gameRef, '100vh');
  }, []);
  return (
    <GameWrapper ref={gameRef}>
      <GameHeader />
      <Main>
        <Images />
        <Info />
        <Price />
      </Main>
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px 40px 30px 40px;

  svg {
    height: 30px;
    width: 30px;
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
