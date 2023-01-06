import styled from 'styled-components';
import places from '../utils/quickNavigation';
import { ReactComponent as GitHub } from '../assets/github.svg';
import rawg from '../assets/RAWG.png';
import video from '../assets/pyke.mp4';

function Home() {
  const SVGSize = { height: '20px', width: '20px' };
  return (
    <>
      <Main>
        <Description>
          <Pitch>
            <h1>Game Harbor</h1>
            <p>
              The best destination to buy new games to competitive prices. 24
              hour support, "best price" guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our <span>careers</span>.
            </p>
          </Pitch>
          <Links>
            <GitHubLink href="https://github.com/alex-dishen" target="_blank">
              <Github />
              alex-dishen
            </GitHubLink>
            <RAWGAPILink href="https://rawg.io/apidocs" target="_blank">
              <RAWGLogo src={rawg} alt="RAWG logo" />
              RAWG API
            </RAWGAPILink>
          </Links>
        </Description>
        <Navigation>
          <h3>Quick Navigation</h3>
          {places.map((place) => (
            <div>
              {place.icon}
              {place.name}
            </div>
          ))}
        </Navigation>
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

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Pitch = styled.div`
  width: min(500px, 57vw);
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(3px);
  border-radius: 30px;
  color: white;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 60px;
    font-weight: 800;
  }

  p {
    margin: 0;

    span {
      color: rgb(24, 230, 223);
      cursor: pointer;
    }
  }
`;

const Links = styled(Pitch)`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 8px 0;
  border-radius: 20px;
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background-color: white;
  color: black;
  text-decoration: none;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: rgb(106, 190, 187);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const Github = styled(GitHub)`
  height: 22px;
  width: 22px;
`;

const RAWGAPILink = styled(GitHubLink)``;

const RAWGLogo = styled.img`
  height: 20px;
`;

const Navigation = styled(Pitch)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: min(240px, 40vw);
  padding: 15px 25px;
  border-radius: 30px;

  h3 {
    margin: 0;
    font-size: 22px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px 0;
    background-color: white;
    color: black;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgb(106, 190, 187);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }
`;

const Video = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Home;
