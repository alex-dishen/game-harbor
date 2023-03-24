import { AnimatePresence } from 'framer-motion';
import uniqid from 'uniqid';
import { IInfoGameSpecification } from 'api/interfaces';
import useInfo from 'pages/Game/Info/useInfo';
import Detail from 'pages/Game/Info/components/Detail';
import { specifications } from 'pages/Game/Info/constants';
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
  const {
    gameSpecification,
    showMoreInfo,
    openAndHideMoreInfo,
    getReleaseDate,
  } = useInfo();

  return (
    <StyledInfo>
      <Description>
        <div>Description</div>
        {gameSpecification?.description_raw}
      </Description>
      <MoreInfo
        initial={{ maxHeight: 60 }}
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
              <li>Released: {getReleaseDate()}</li>
              {specifications.map((specification) => (
                <li key={uniqid()}>
                  {specification.name}
                  <Detail
                    specifications={
                      gameSpecification[
                        specification.category
                      ] as IInfoGameSpecification[]
                    }
                  />
                </li>
              ))}
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
