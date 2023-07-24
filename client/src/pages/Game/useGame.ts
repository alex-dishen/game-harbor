import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGameDetails, getGameScreenshots } from 'api/gameData'
import { setGameScreenshots, setGameSpecification } from 'redux/gamesSlice'
import { RootState } from 'redux/types'
import { getGame } from 'api/CustomAPI'
import { RAWGGameSpecificationResponseT } from 'api/types'
import { gameSpecification } from '../../constants'

const useGame = () => {
  const dispatch = useDispatch()
  const gameID = useSelector((state: RootState) => state.games.gameID)

  const cleanGamePage = useCallback(() => {
    dispatch(setGameSpecification({ ...gameSpecification, id: gameID }))
    dispatch(setGameScreenshots({ results: [{ id: 0, image: '' }] }))
  }, [dispatch, gameID])

  const isRAWGGame = typeof gameID === 'number'

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
  }, [cleanGamePage, setGameDetails])
}

export default useGame
