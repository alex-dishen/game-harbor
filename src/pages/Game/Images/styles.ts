import styled from 'styled-components';

export const BackgroundImage = styled.div`
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

export const LeftButton = styled.div`
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

export const RightButton = styled(LeftButton)`
  justify-content: flex-end;
`;

export const Dots = styled.div`
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
