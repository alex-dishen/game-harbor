import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/chevron-right.svg';
import { ReactComponent as ChevronDown } from '../assets/chevron-down.svg';
import { ReactComponent as Check } from '../assets/check.svg';

function Game() {
  return (
    <GameWrapper>
      <Header>
        <BackButton>
          <ArrowLeft /> Store
        </BackButton>
        <GameName>Game Name</GameName>
      </Header>
      <Main>
        <BackgroundImage>
          <Dots>
            <div />
            <div />
            <div />
            <div />
            <div />
          </Dots>
          <LeftButton>
            <ChevronLeft />
          </LeftButton>
          <RightButton>
            <ChevronRight />
          </RightButton>
        </BackgroundImage>
        <Info>
          <About>
            <div>About</div>
            Rockstar Games went bigger, since their previous installment of the
            series. You get the complicated and realistic world-building from
            Liberty City of GTA4 in the setting of lively and diverse Los
            Santos, from an old fan favorite GTA San Andreas. 561 different
            vehicles (including every transport you can operate) and the amount
            is rising with every update. Simultaneous storytelling from three
            unique perspectives: Follow Michael, ex-criminal living his life of
            leisure away from the past, Franklin, a kid that seeks the better
            future, and Trevor, the exact past Michael is trying to run away
            from. GTA Online will provide a lot of additional challenge even for
            the experienced players, coming fresh from the story mode. Now you
            will have other players around that can help you just as likely as
            ruin your mission. Every GTA mechanic up to date can be experienced
            by players through the unique customizable character, and community
            content paired with the leveling system tends to keep everyone busy
            and engaged.
          </About>
          <MoreInfo>
            <MoreButton>
              More <ChevronDown />
            </MoreButton>
          </MoreInfo>
        </Info>
        <Price>
          <div>$13</div>
          <div>
            Added <Check />
          </div>
        </Price>
      </Main>
    </GameWrapper>
  );
}

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 20px 40px 30px 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(204, 204, 204);
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  svg {
    height: 30px;
    fill: rgb(204, 204, 204);
    transition: 0.3s;
  }

  &:hover {
    color: rgb(24, 176, 171);

    svg {
      fill: rgb(24, 176, 171);
    }
  }
`;

const GameName = styled.div`
  font-size: 46px;
  font-weight: 800;
`;

const Main = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr max(26vw, 300px);
  grid-template-rows: 1fr min-content;
  gap: 30px;
`;

const BackgroundImage = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: rgb(46, 46, 46);
  border-radius: 30px;
  grid-row: 1 / 3;
`;

const LeftButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80px;
  cursor: pointer;

  svg {
    height: 50px;
    fill: rgb(204, 204, 204);
    transition: 0.3s;
  }

  &:hover {
    svg {
      fill: white;
    }
  }
`;

const RightButton = styled(LeftButton)`
  justify-content: flex-end;
`;

const Info = styled.div`
  color: white;
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
  height: 63px;
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
    fill: rgb(204, 204, 204);
    transition: 0.3s;
  }

  &:hover {
    color: white;

    svg {
      fill: white;
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background-color: rgb(26, 26, 26);
  color: white;
  border-radius: 10px;
  grid-column: -2 / -1;

  & > div:first-child {
    font-size: 18px;
    font-weight: 500;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: 600;

    svg {
      height: 25px;
      fill: white;
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  padding: 14px 18px;

  background-color: rgb(15, 16, 17);
  border-radius: 10px;

  & div {
    height: 10px;
    width: 10px;
    background-color: rgb(24, 176, 171);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default Game;
