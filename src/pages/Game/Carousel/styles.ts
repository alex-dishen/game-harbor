import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarouselWrapper = styled.div`
  position: relative;
  min-height: 445px;
  background-color: rgb(46, 46, 46);
  border-radius: 30px;
  overflow: hidden;
  grid-area: images;

  svg {
    height: 50px;
    width: 50px;
  }
`;

export const LeftButton = styled.div`
  position: absolute;
  z-index: 1;
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

export const ImageHolder = styled(motion.div)`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Image = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 13px;
  width: fit-content;
  padding: 14px 18px;

  background-color: rgb(15, 16, 17);
  border-radius: 10px;
`;

export const Dot = styled(motion.div)`
  height: 9px;
  width: 9px;
  background-color: rgb(140, 140, 140);
  border-radius: 50%;
  cursor: pointer;
`;

export const ActiveDot = styled(motion.div)`
  position: absolute;
  top: 35%;
  left: 16px;
  height: 11px;
  width: 11px;
  background-color: rgb(24, 176, 171);
  border-radius: 50%;
  cursor: pointer;
`;

export const RightButton = styled(LeftButton)`
  top: 0;
  right: 0;
  justify-content: flex-end;
`;
