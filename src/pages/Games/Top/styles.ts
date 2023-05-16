import styled from 'styled-components';
import { OrderTypes } from 'pages/Games/Top/types';

export const StyledTop = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const FilterName = styled.div`
  font-size: 60px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: 48px;
  }
`;

export const OrderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 15px;
  background-color: rgb(38, 38, 38);
  background-color: white;
  color: black;
  border-radius: 10px;

  span {
    font-weight: 700;
  }
`;

export const OptionWrapper = styled.ul`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 10px;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 10px;

  li {
    font-size: 15px;
    padding: 3px 8px;
    border-radius: 7px;
    transition: 0.2s;

    &:hover {
      background-color: rgb(229, 229, 229);
    }
  }
`;

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  svg {
    fill: green;
  }
`;
