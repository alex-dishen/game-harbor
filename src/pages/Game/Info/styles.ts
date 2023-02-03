import styled from 'styled-components';

export const StyledInfo = styled.div`
  grid-area: info;
`;

export const About = styled.div`
  height: 300px;
  padding: 20px;
  background-color: rgb(26, 26, 26);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: scroll;
  color: rgb(204, 204, 204);

  div {
    margin: 15px 0;
    color: white;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 245px;
  padding: 20px;
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const MoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgb(204, 204, 204);
  cursor: pointer;
  transition: 0.3s;

  svg {
    height: 20px;
  }

  &:hover {
    color: white;

    svg {
      fill: white;
    }
  }
`;
