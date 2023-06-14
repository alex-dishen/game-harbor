import styled from 'styled-components';

export const SecondaryHeader = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  margin-bottom: -15px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  width: clamp(280px, 60vw, 567px);
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(15px);
`;
