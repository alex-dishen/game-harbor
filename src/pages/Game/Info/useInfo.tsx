import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/types'

const useInfo = () => {
  const gameSpecification = useSelector(
    (state: RootState) => state.games.gameSpecification,
  )
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const openAndHideMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  const getReleaseDate = () => {
    const release = gameSpecification.released

    if (!release) return 'Release date is not provided'

    return release?.replaceAll('-', '/')
  }

  return {
    gameSpecification,
    showMoreInfo,
    openAndHideMoreInfo,
    getReleaseDate,
  }
}

export default useInfo
