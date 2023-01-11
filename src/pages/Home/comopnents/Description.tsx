import styled from 'styled-components';
import rawg from '../../../assets/RAWG.png';
import { ReactComponent as Github } from '../../../assets/github.svg';

function Description() {
  return (
    <StyledDescription>
      <Pitch>
        <h1>Game Harbor</h1>
        <p>
          The best destination to buy new games to competitive prices. 24 hour
          support, "best price" guarantee and a flawless UX. Wish for more? Tell
          us below — or check out our <span>careers</span>.
        </p>
      </Pitch>
      <Links>
        <GitHubLink href="https://github.com/alex-dishen" target="_blank">
          <Github />
          alex-dishen
        </GitHubLink>
        <RAWGLink href="https://rawg.io/apidocs" target="_blank">
          <RAWGLogo src={rawg} alt="RAWG logo" />
          RAWG API
        </RAWGLink>
      </Links>
    </StyledDescription>
  );
}

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Pitch = styled.div`
  width: clamp(350px, 57vw, 500px);
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

  svg {
    height: 22px;
    width: 22px;
  }
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

const RAWGLink = styled(GitHubLink)``;

const RAWGLogo = styled.img`
  height: 20px;
`;

export default Description;
