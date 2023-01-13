import styled from 'styled-components';
import { ReactComponent as Chevron } from '../../../assets/chevron-down.svg';

function Top() {
  return (
    <StyledTop>
      <FilterName>Filter Name</FilterName>
      <OrderSection>
        <div>
          Order by: ...
          <Chevron />
        </div>
        <div>
          Platforms <Chevron />
        </div>
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
`;

const OrderSection = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    gap: 8px;
    padding: 8px 15px;
    background-color: rgb(38, 38, 38);
    border-radius: 10px;
    cursor: pointer;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export default Top;
