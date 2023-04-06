import rawg from 'assets/images/RAWG.png';
import { ReactComponent as Github } from 'assets/images/github.svg';
import {
  StyledDescription,
  Pitch,
  Links,
  GitHubLink,
  RAWGLink,
  RAWGLogo,
} from 'pages/Home/Description/styles';

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

export default Description;
