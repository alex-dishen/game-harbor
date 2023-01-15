import { useRef, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { orderBy } from '../../../utils/options';
import { useClickOutside } from '../../../utils/customHooks';
import PlatformsOrder from './PlatformsOrder';
import { ReactComponent as Chevron } from '../../../assets/chevron-down.svg';

interface Props {
  isChangeNavbar: boolean;
}

interface OrderProps {
  platformTitle?: string;
  orderByTitle?: string;
}

function Top({ isChangeNavbar }: Props) {
  const platformOrderRef = useRef<HTMLDivElement>(null);
  const orderByRef = useRef<HTMLDivElement>(null);
  const [isOpenPlatformOrder, setIsOpenPlatformOrder] = useState(false);
  const [isOpenOrderBy, setIsOpenOrderBy] = useState(false);
  const [platformTitle, setPlatformTitle] = useState('Platforms');
  const [orderByTitle, setOrderByTitle] = useState('...');

  const openAndHidePlatformOrder = () => {
    setIsOpenPlatformOrder(!isOpenPlatformOrder);
  };

  const openAndHideOrderBy = () => {
    setIsOpenOrderBy(!isOpenOrderBy);
  };

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) setOrderByTitle(textContent);
  };

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e);
    openAndHideOrderBy();
  };

  useClickOutside(
    isOpenPlatformOrder,
    platformOrderRef,
    openAndHidePlatformOrder
  );
  useClickOutside(isOpenOrderBy, orderByRef, openAndHideOrderBy);

  return (
    <StyledTop>
      <FilterName>Filter Name</FilterName>

      <OrderSection>
        <OrderWrapper>
          <Order orderByTitle={orderByTitle} onClick={openAndHideOrderBy}>
            Order by: {orderByTitle}
            <Chevron />
          </Order>
          {isOpenOrderBy && (
            <OptionWrapper ref={orderByRef}>
              {orderBy.map((item) => (
                <Option onClick={handleOptionClick} key={uniqid()}>
                  {item}
                </Option>
              ))}
            </OptionWrapper>
          )}
        </OrderWrapper>

        <OrderWrapper>
          <Order
            platformTitle={platformTitle}
            onClick={openAndHidePlatformOrder}
          >
            {platformTitle} <Chevron />
          </Order>
          {isOpenPlatformOrder && (
            <OptionWrapper ref={platformOrderRef}>
              <PlatformsOrder
                isChangeNavbar={isChangeNavbar}
                setTitle={setPlatformTitle}
                openAndHidePlatformOrder={openAndHidePlatformOrder}
              />
            </OptionWrapper>
          )}
        </OrderWrapper>
      </OrderSection>
    </StyledTop>
  );
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

export default Top;
