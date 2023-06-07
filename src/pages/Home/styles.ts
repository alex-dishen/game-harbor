import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 30px 40px;

  @media (max-width: 815px) {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
  }
`;

export const Video = styled(motion.video)`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
