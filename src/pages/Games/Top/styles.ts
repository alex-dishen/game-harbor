import styled from 'styled-components';

interface OrderProps {
  platformTitle?: string;
  orderByTitle?: string;
}

const StyledTop = styled.div`
  display: flex;
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

const OrderSection = styled.div`
  display: flex;
  gap: 20px;

  svg {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

const OrderWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  min-width: 150px;
  cursor: pointer;
`;

const Order = styled.div<OrderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 15px;
  ${(props) => {
    if (props.orderByTitle) {
      return {
        backgroundColor:
          props.orderByTitle === '...' ? 'rgb(38, 38, 38)' : 'white',
        color: props.orderByTitle === '...' ? 'white' : 'black',
      };
    }
    if (props.platformTitle) {
      return {
        backgroundColor:
          props.platformTitle === 'Platforms' ? 'rgb(38, 38, 38)' : 'white',
        color: props.platformTitle === 'Platforms' ? 'white' : 'black',
      };
    }
  }}
  border-radius: 10px;

  svg {
    fill: ${(props) => {
      if (props.orderByTitle) {
        return props.orderByTitle === '...' ? 'white' : 'black';
      }
      if (props.platformTitle) {
        return props.platformTitle === 'Platforms' ? 'white' : 'black';
      }
    }};
  }
`;

const OptionWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 10px;

  p {
    margin: 0;
    padding-left: 5px;
    color: rgb(139, 139, 139);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    padding: 3px 8px;
    border-radius: 7px;
    transition: 0.2s;

    svg {
      fill: black;
    }

    &:hover {
      background-color: rgb(229, 229, 229);
    }
  }
`;

const Option = styled.div``;

export {
  StyledTop,
  FilterName,
  OrderSection,
  OrderWrapper,
  Order,
  OptionWrapper,
  Option,
};
