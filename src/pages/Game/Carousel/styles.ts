import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const leftToRightBackground = keyframes`
  from {
    background-position: -240% 0;
  } to {
    background-position: 340% 0;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  min-height: 445px;
  background: linear-gradient(
    90deg,
    rgba(46, 46, 46, 1) 0%,
    rgba(73, 73, 73, 0.6) 50%,
    rgba(46, 46, 46, 1) 100%
  );
  background-color: rgb(46, 46, 46);
  border-radius: 30px;
  background-size: 70% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  animation: ${leftToRightBackground} 3.4s linear infinite;
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
  position: absolute;
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
