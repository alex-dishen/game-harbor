import { useRef, useState, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/types';
import { setOrderTitle } from 'redux/counterSlice';
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

function Top() {
  const dispatch = useDispatch();
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const { currentFilter, orderTitle } = reduxStore;

  const orderRef = useRef<HTMLUListElement>(null);
  const [showOrder, setShowOrder] = useState(true);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const orderOptions = ['Name', 'Release date', 'Popularity', 'Rating'];

  const openAndHideOrder = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { textContent } = target;

    if (textContent !== null) dispatch(setOrderTitle(textContent.trim()));
  };

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e);
    openAndHideOrder();
  };

  useClickOutside(isOrderOpen, orderRef, openAndHideOrder);

  useEffect(() => {
    if (
      currentFilter === 'All time top' ||
      currentFilter === 'Popular in 2022' ||
      currentFilter === 'Best of the year'
    ) {
      setShowOrder(false);
      return;
    }

    return setShowOrder(true);
  }, [currentFilter]);

  return (
    <StyledTop>
      <FilterName>{currentFilter}</FilterName>

      {showOrder && (
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
      )}
    </StyledTop>
  );
}

export default Top;
