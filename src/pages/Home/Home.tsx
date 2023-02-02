import styled from 'styled-components';
import { motion } from 'framer-motion';
import Description from 'pages/Home/Description/Description';
import QuickNavigation from 'pages/Home/QuickNavigation/QuickNavigation';
import video from 'assets/pyke.mp4';

function Home() {
  return (
    <>
      <Main
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <Description />
        <QuickNavigation />
      </Main>
      <Video
        autoPlay
        muted
        loop
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <source src={video} type="video/mp4" />
      </Video>
    </>
  );
}

const Main = styled(motion.main)`
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

const Video = styled(motion.video)`
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
