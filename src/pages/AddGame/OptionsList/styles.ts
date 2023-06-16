import styled from 'styled-components';

export const OptionsHolder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 0;
  list-style: none;
`;

export const ListOption = styled.li`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  cursor: pointer;

  svg {
    fill: white;
    height: 15px;
  }
`;
