import uniqid from 'uniqid';
import useTop from 'pages/Games/Top/useTop';
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
  const {
    currentFilter,
    isShowOrder,
    orderTitle,
    isOrderOpen,
    orderRef,
    orderOptions,
    openAndHideOrder,
    handleOptionClick,
  } = useTop();

  return (
    <StyledTop>
      <FilterName>{currentFilter}</FilterName>

      {isShowOrder && (
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
