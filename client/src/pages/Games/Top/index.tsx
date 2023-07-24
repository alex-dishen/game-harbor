import useTop from 'pages/Games/Top/useTop'
import { orderOptions } from 'pages/Games/Top/constants'
import {
  StyledTop,
  FilterName,
  OrderWrapper,
  Order,
  OptionWrapper,
  Option,
} from 'pages/Games/Top/styles'
import { ReactComponent as Check } from 'assets/images/check.svg'
import { ReactComponent as Chevron } from 'assets/images/chevron-down.svg'

const Top = () => {
  const {
    currentFilter,
    isShowOrder,
    orderTitle,
    isOrderOpen,
    orderRef,
    openAndHideOrder,
    handleOptionClick,
  } = useTop()

  return (
    <StyledTop>
      <FilterName>{currentFilter}</FilterName>

      {isShowOrder && (
        <OrderWrapper>
          <Order onClick={openAndHideOrder}>
            Order by: <span>{orderTitle}</span>
            <Chevron />
          </Order>
          {isOrderOpen && (
            <OptionWrapper ref={orderRef}>
              {orderOptions.map(({ id, title }) => (
                <Option onClick={handleOptionClick} key={id}>
                  {title}
                  {orderTitle === title ? <Check /> : <div />}
                </Option>
              ))}
            </OptionWrapper>
          )}
        </OrderWrapper>
      )}
    </StyledTop>
  )
}

export default Top
