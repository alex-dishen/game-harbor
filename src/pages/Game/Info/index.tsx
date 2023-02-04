import {
  StyledInfo,
  About,
  MoreInfo,
  MoreButton,
} from 'pages/Game/Info/styles';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';

interface InfoProps {
  description?: string;
}

function Info({ description }: InfoProps) {
  return (
    <StyledInfo>
      <About>
        <div>Description</div>
        {description}
      </About>
      <MoreInfo>
        <MoreButton>
          More <ChevronDown />
        </MoreButton>
      </MoreInfo>
    </StyledInfo>
  );
}

export default Info;
