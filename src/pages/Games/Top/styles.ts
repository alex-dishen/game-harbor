import styled from 'styled-components';

interface OrderProps {
  orderTitle: string;
}

const StyledTop = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const FilterName = styled.div`
  font-size: 60px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: 48px;
  }
`;

const OrderWrapper = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`;

const Order = styled.div<OrderProps>`
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

const OptionWrapper = styled.ul`
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

const Option = styled.li`
  list-style: none;
`;

export { StyledTop, FilterName, OrderWrapper, Order, OptionWrapper, Option };
