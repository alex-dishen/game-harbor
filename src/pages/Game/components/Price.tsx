import styled from 'styled-components';
import { ReactComponent as Check } from 'assets/check.svg';

function Price() {
  return (
    <StyledPrice>
      <span>$13</span>
      <Status>
        Added <Check />
      </Status>
    </StyledPrice>
  );
}

const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px;
  background-color: rgb(26, 26, 26);
  color: white;
  border-radius: 10px;
  grid-area: price;

  & > span:first-child {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 600;

  svg {
    height: 25px;
    fill: white;
  }
`;

export default Price;
