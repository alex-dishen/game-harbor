import {
  BackgroundImage,
  LeftButton,
  RightButton,
  Dots,
} from 'pages/Game/Images/styles';
import { ReactComponent as ChevronLeft } from 'assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/chevron-right.svg';

function Images() {
  return (
    <BackgroundImage>
      <LeftButton>
        <ChevronLeft />
      </LeftButton>
      <RightButton>
        <ChevronRight />
      </RightButton>
      <Dots>
        <div />
        <div />
        <div />
        <div />
        <div />
      </Dots>
    </BackgroundImage>
  );
}

export default Images;
