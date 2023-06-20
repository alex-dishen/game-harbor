import { AnimatePresence } from 'framer-motion'
import { InfoGameSpecificationTypes } from 'api/types'
import useInfo from 'pages/Game/Info/useInfo'
import Detail from 'pages/Game/Info/components/Detail'
import { specifications } from 'pages/Game/Info/constants'
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg'
import { ReactComponent as ChevronUp } from 'assets/images/chevron-up.svg'
import {
  StyledInfo,
  Description,
  MoreInfo,
  Details,
  MoreButton,
} from 'pages/Game/Info/styles'

const Info = () => {
  const {
    gameSpecification,
    showMoreInfo,
    openAndHideMoreInfo,
    getReleaseDate,
  } = useInfo()

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
              {specifications.map(({ id, name, category }) => (
                <li key={id}>
                  {name}
                  <Detail
                    specifications={
                      gameSpecification[
                        category
                      ] as InfoGameSpecificationTypes[]
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
  )
}

export default Info
