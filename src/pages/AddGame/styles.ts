import styled from 'styled-components';

export const AddGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Header = styled.h1`
  font-size: 50px;
`;

export const InputsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  p {
    margin: 0;
  }
`;

export const Star = styled.span`
  color: #61bdff;
`;
