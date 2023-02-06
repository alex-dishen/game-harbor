import { useRef, useState, MouseEvent } from 'react';
import uniqid from 'uniqid';
import { useClickOutside } from 'utils/customHooks';
import { ReactComponent as Check } from 'assets/check.svg';
import { ReactComponent as Chevron } from 'assets/chevron-down.svg';
import {
  StyledTop,
  FilterName,
  OrderWrapper,
  Order,
  OptionWrapper,
  Option,
} from 'pages/Games/Top/styles';

interface TopProps {
  currentFilter: string;
}

function Top({ currentFilter }: TopProps) {
  const orderRef = useRef<HTMLUListElement>(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderTitle, setOrderTitle] = useState('...');
  const orderOptions = ['Name', 'Release date', 'Popularity', 'Rating'];

  const openAndHideOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) setOrderTitle(textContent.trim());
  };

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e);
    openAndHideOrder();
  };

  useClickOutside(isOrderOpen, orderRef, openAndHideOrder);

  return (
    <StyledTop>
      <FilterName>{currentFilter}</FilterName>

      <OrderWrapper>
        <Order orderTitle={orderTitle} onClick={openAndHideOrder}>
          Order by: <span>{orderTitle}</span>
          <Chevron />
        </Order>
        {isOrderOpen && (
          <OptionWrapper ref={orderRef}>
            {orderOptions.map((item) => (
              <Option onClick={handleOptionClick} key={uniqid()}>
                {item}
                {orderTitle === item ? <Check /> : <div />}
              </Option>
            ))}
          </OptionWrapper>
        )}
      </OrderWrapper>
    </StyledTop>
  );
}

export default Top;
