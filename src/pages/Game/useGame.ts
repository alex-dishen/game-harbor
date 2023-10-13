import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getGameDetails, getGameScreenshots } from 'api/gameData'
import { setGameScreenshots, setGameSpecification } from 'redux/gamesSlice'
import { getGame } from 'api/CustomAPI'
import { cutOffGame } from 'pages/Game/helpers'
import { RAWGGameSpecificationResponseT } from 'api/types'
import { gameSpecification } from '../../constants'

const useGame = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const gameID = cutOffGame(location.pathname)
  const isRAWGGame = !isNaN(+gameID)

  const cleanGamePage = useCallback(() => {
    dispatch(setGameSpecification({ ...gameSpecification, id: gameID }))
    dispatch(setGameScreenshots({ results: [{ id: 0, image: '' }] }))
  }, [dispatch, gameID])

  const setGameDetails = useCallback(async () => {
    const details = isRAWGGame
      ? await getGameDetails(gameID)
      : ((await getGame(gameID)) as RAWGGameSpecificationResponseT)

    if ('data' in details) dispatch(setGameSpecification(details.data[0]))

    if (!('data' in details)) dispatch(setGameSpecification(details))

    if (isRAWGGame) {
      const screenshots = await getGameScreenshots(gameID)
      dispatch(setGameScreenshots(screenshots))
    }
  }, [dispatch, gameID])

  useEffect(() => {
    cleanGamePage()
    setGameDetails()
  }, [])
}

export default useGame
