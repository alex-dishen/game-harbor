import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Description from './components/Description';
import QuickNavigation from './components/QuickNavigation';
import { changeParentHeight } from '../../utils/helpers';
import video from '../../assets/pyke.mp4';

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeParentHeight(mainRef, '100vh');
  }, []);

  return (
    <>
      <Main ref={mainRef}>
        <Description />
        <QuickNavigation />
      </Main>
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>
    </>
  );
}

const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 30px 40px;

  @media (max-width: 815px) {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
  }
`;

const Video = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 815px) {
    filter: brightness(60%);
  }
`;

export default Home;
