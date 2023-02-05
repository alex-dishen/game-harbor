import styled from 'styled-components';
import { IMoreButton } from 'pages/Game/Info/interfaces';

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
  flex-direction: column;
  max-height: 245px;
  padding: 20px;
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const Details = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  color: rgb(153, 153, 153);
  list-style: none;
  overflow: scroll;

  li {
    display: flex;
    gap: 4px;

    a {
      text-decoration: none;
      color: rgb(153, 153, 153);
    }
  }
`;

export const MoreButton = styled.div<IMoreButton>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  padding-top: ${({ showMoreInfo }) => (showMoreInfo ? '5px' : '0')};
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
