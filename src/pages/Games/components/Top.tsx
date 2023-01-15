import { useEffect, useRef, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import PlatformsOrder from './PlatformsOrder';
import { ReactComponent as Chevron } from '../../../assets/chevron-down.svg';

interface Props {
  isChangeNavbar: boolean;
}

function Top({ isChangeNavbar }: Props) {
  const platformOrderRef = useRef<HTMLDivElement>(null);
  const orderByRef = useRef<HTMLDivElement>(null);
  const [isOpenPlatformOrder, setIsOpenPlatformOrder] = useState(false);
  const [isOpenOrderBy, setIsOpenOrderBy] = useState(false);
  const [platformTitle, setPlatformTitle] = useState('Platforms');
  const [orderByTitle, setOrderByTitle] = useState('Release date');

  const orderBy = [
    'Relevance',
    'Date added',
    'Name',
    'Release date',
    'Popularity',
    'Average rating',
  ];

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

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        isOpenPlatformOrder &&
        !platformOrderRef.current?.contains(e.target as HTMLElement)
      ) {
        openAndHidePlatformOrder();
      }

      if (
        isOpenOrderBy &&
        !orderByRef.current?.contains(e.target as HTMLElement)
      ) {
        openAndHideOrderBy();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <StyledTop>
      <FilterName>Filter Name</FilterName>
      <OrderSection>
        <Order onClick={openAndHideOrderBy}>
          Order by: {orderByTitle}
          <Chevron />
          {isOpenOrderBy && (
            <OrderHolder ref={orderByRef}>
              {orderBy.map((item) => (
                <Option onClick={changeTitle} key={uniqid()}>
                  {item}
                </Option>
              ))}
            </OrderHolder>
          )}
        </Order>
        <Order onClick={openAndHidePlatformOrder}>
          {platformTitle} <Chevron />
          {isOpenPlatformOrder && (
            <OrderHolder ref={platformOrderRef}>
              <PlatformsOrder
                isChangeNavbar={isChangeNavbar}
                setTitle={setPlatformTitle}
              />
            </OrderHolder>
          )}
        </Order>
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

const Option = styled.div``;

const OrderSection = styled.div`
  display: flex;
  gap: 20px;

  svg {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

const Order = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  gap: 8px;
  min-width: 150px;
  padding: 8px 15px;
  background-color: rgb(38, 38, 38);
  border-radius: 10px;
  cursor: pointer;
`;

const OrderHolder = styled.div`
  position: absolute;
  z-index: 2;
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

export default Top;
