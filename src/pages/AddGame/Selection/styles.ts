import styled from 'styled-components';

export const SelectionBody = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  color: #bcbcbc;
  cursor: pointer;

  &,
  svg {
    transition: 300ms;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.8);

    svg {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const DescriptionHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export const Image = styled.img`
  height: 50px;
  width: 70px;
  object-fit: cover;
  border-radius: 5px;
`;
