import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../../assets/chevron-right.svg';

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

const BackgroundImage = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 445px;
  background-color: rgb(46, 46, 46);
  border-radius: 30px;
  grid-area: images;

  svg {
    height: 50px;
    width: 50px;
  }
`;

const LeftButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80px;
  cursor: pointer;

  &:hover {
    svg {
      fill: white;
    }
  }
`;

const RightButton = styled(LeftButton)`
  justify-content: flex-end;
`;

const Dots = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  padding: 14px 18px;

  background-color: rgb(15, 16, 17);
  border-radius: 10px;

  & div {
    height: 10px;
    width: 10px;
    background-color: rgb(24, 176, 171);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default Images;
