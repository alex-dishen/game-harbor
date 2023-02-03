import styled from 'styled-components';

export const StyledPrice = styled.div`
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

export const Status = styled.span`
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
