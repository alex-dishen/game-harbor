import { useState } from 'react';
import {
  StyledInfo,
  About,
  MoreInfo,
  Details,
  MoreButton,
} from 'pages/Game/Info/styles';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';
import { IGame } from 'api/interfaces';
import Developers from 'pages/Game/Info/Developers';
import Genres from 'pages/Game/Info/Genres';
import Publishers from 'pages/Game/Info/Publishers';
import Platforms from 'pages/Game/Info/Platforms';

interface InfoProps {
  gameSpecification: IGame | undefined;
}

function Info({ gameSpecification }: InfoProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const openAndHideMoreInfo = () => setShowMoreInfo(!showMoreInfo);

  const setEmptyOrComa = (index: number, array: []) =>
    index + 1 === array.length ? '' : ', ';

  return (
    <StyledInfo>
      <About>
        <div>Description</div>
        {gameSpecification?.description_raw}
      </About>
      <MoreInfo>
        {showMoreInfo && (
          <Details>
            <li>
              Website:
              <a
                href={gameSpecification?.website}
                target="_blank"
                rel="noreferrer"
              >
                {gameSpecification?.website}
              </a>
            </li>
            <li>
              Released: {gameSpecification?.released.replaceAll('-', '/')}
            </li>
            <li>
              Genres:
              <Genres
                gameSpecification={gameSpecification}
                setEmptyOrComa={setEmptyOrComa}
              />
            </li>
            <li>
              Platforms:
              <Platforms
                gameSpecification={gameSpecification}
                setEmptyOrComa={setEmptyOrComa}
              />
            </li>
            <li>
              Developers:
              <Developers
                gameSpecification={gameSpecification}
                setEmptyOrComa={setEmptyOrComa}
              />
            </li>
            <li>
              Publishers:
              <Publishers
                gameSpecification={gameSpecification}
                setEmptyOrComa={setEmptyOrComa}
              />
            </li>
          </Details>
        )}
        <MoreButton showMoreInfo={showMoreInfo} onClick={openAndHideMoreInfo}>
          More {showMoreInfo ? <ChevronUp /> : <ChevronDown />}
        </MoreButton>
      </MoreInfo>
    </StyledInfo>
  );
}

export default Info;
