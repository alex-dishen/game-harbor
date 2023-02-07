import styled from 'styled-components';
import { IMoreButton } from 'pages/Game/Info/interfaces';

export const StyledInfo = styled.div`
  grid-area: info;
`;

export const Description = styled.div`
  max-height: 300px;
  padding: 20px 20px 0px 20px;
  background-color: rgb(26, 26, 26);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: scroll;
  color: rgb(204, 204, 204);
  box-shadow: 0 0 15px rgb(10, 10, 10);
  clip-path: inset(0px 0px -20px 0px);

  &::after {
    content: '';
    height: 50px;
    margin-top: -20px;
    width: 100%;
    display: block;
    position: sticky;
    bottom: 0;
    background-image: linear-gradient(to bottom, transparent, rgb(26, 26, 26));
    pointer-events: none;
  }

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
  gap: 6px;
  margin: 0;
  padding: 0;
  color: rgb(153, 153, 153);
  list-style: none;
  overflow: scroll;

  li {
    display: flex;
    gap: 7px;

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
