import styled from 'styled-components';
import video from '../assets/pyke.mp4';

function Home() {
  return (
    <Video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </Video>
  );
}

const Video = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
`;

export default Home;
