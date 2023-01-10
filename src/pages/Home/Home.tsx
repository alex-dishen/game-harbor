import styled from 'styled-components';
import Description from './comopnents/Description';
import QuickNavigation from './comopnents/QuickNavigation';
import video from '../../assets/pyke.mp4';

function Home() {
  return (
    <>
      <Main>
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
  padding: 0 40px;
`;

const Video = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Home;
