import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartWrapper = styled(motion.div)`
  z-index: 3;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 360px;
  padding: 30px;
  background-color: rgb(26, 26, 26);
  color: rgb(153, 153, 153);

  @media (max-width: 565px) {
    width: 280px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    color: white;
    font-size: 24px;
    font-weight: 800;
  }

  button {
    background-color: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
  }
`;

export const ChosenGames = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
  overflow: scroll;
`;

export const GameHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 13px;
  background-color: rgb(38, 38, 38);
  border-radius: 10px;

  @media (max-width: 565px) {
    gap: 10px;
  }
`;

export const Details = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  text-decoration: none;

  @media (max-width: 565px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  height: 90px;
  width: 130px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 565px) {
    height: 120px;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Detail = styled.p`
  margin: 0;
  text-align: end;
  color: rgb(153, 153, 153);

  &:first-child {
    color: white;
  }
`;

export const Cross = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  height: 22px;
  width: 22px;
  background-color: rgb(64, 64, 64);
  border-radius: 50%;
  cursor: pointer;
`;

export const TotalPrice = styled.footer`
  color: inherit;
`;

export const Overlay = styled(motion.div)`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
`;
