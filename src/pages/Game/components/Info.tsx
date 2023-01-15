import styled from 'styled-components';
import { ReactComponent as ChevronDown } from '../../../assets/chevron-down.svg';

function Info() {
  return (
    <StyledInfo>
      <About>
        <div>About</div>
        Rockstar Games went bigger, since their previous installment of the
        series. You get the complicated and realistic world-building from
        Liberty City of GTA4 in the setting of lively and diverse Los Santos,
        from an old fan favorite GTA San Andreas. 561 different vehicles
        (including every transport you can operate) and the amount is rising
        with every update. Simultaneous storytelling from three unique
        perspectives: Follow Michael, ex-criminal living his life of leisure
        away from the past, Franklin, a kid that seeks the better future, and
        Trevor, the exact past Michael is trying to run away from. GTA Online
        will provide a lot of additional challenge even for the experienced
        players, coming fresh from the story mode. Now you will have other
        players around that can help you just as likely as ruin your mission.
        Every GTA mechanic up to date can be experienced by players through the
        unique customizable character, and community content paired with the
        leveling system tends to keep everyone busy and engaged.
      </About>
      <MoreInfo>
        <MoreButton>
          More <ChevronDown />
        </MoreButton>
      </MoreInfo>
    </StyledInfo>
  );
}

const StyledInfo = styled.div`
  grid-area: info;
`;

const About = styled.div`
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

const MoreInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 245px;
  padding: 20px;
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const MoreButton = styled.div`
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

export default Info;
