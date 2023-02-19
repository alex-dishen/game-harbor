import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { RootState } from 'redux/store';
import Developers from 'pages/Game/Info/components/Developers';
import Genres from 'pages/Game/Info/components/Genres';
import Publishers from 'pages/Game/Info/components/Publishers';
import Platforms from 'pages/Game/Info/components/Platforms';
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg';
import {
  StyledInfo,
  Description,
  MoreInfo,
  Details,
  MoreButton,
} from 'pages/Game/Info/styles';

function Info() {
  const gameSpecification = useSelector(
    (state: RootState) => state.harbor.gameSpecification
  );
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const openAndHideMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const setEmptyOrComa = (index: number, array: []) =>
    index + 1 === array.length ? '' : ', ';

  return (
    <StyledInfo>
      <Description>
        <div>Description</div>
        {gameSpecification?.description_raw}
      </Description>
      <MoreInfo
        animate={{ maxHeight: showMoreInfo ? 245 : 60 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {showMoreInfo && (
            <Details
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
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
        </AnimatePresence>
        <MoreButton showMoreInfo={showMoreInfo} onClick={openAndHideMoreInfo}>
          More {showMoreInfo ? <ChevronUp /> : <ChevronDown />}
        </MoreButton>
      </MoreInfo>
    </StyledInfo>
  );
}

export default Info;
