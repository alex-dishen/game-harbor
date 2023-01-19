import { useRef, useState, MouseEvent } from 'react';
import uniqid from 'uniqid';
import { orderBy } from './PlatformsOrder/options';
import { useClickOutside } from '../../../utils/customHooks';
import PlatformsOrder from './PlatformsOrder/PlatformsOrder';
import { ReactComponent as Chevron } from '../../../assets/chevron-down.svg';
import {
  StyledTop,
  FilterName,
  OrderSection,
  OrderWrapper,
  Order,
  OptionWrapper,
  Option,
} from './styles';

interface Props {
  isChangeNavbar: boolean;
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

export default Top;
