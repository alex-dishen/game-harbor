import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGameDetails, getGameScreenshots } from 'api/gameData'
import { setGameScreenshots, setGameSpecification } from 'redux/gamesSlice'
import { RootState } from 'redux/types'
import { gameSpecification } from '../../constants'

const useGame = () => {
  const dispatch = useDispatch()
  const gameID = useSelector((state: RootState) => state.games.gameID)

  const cleanGamePage = useCallback(() => {
    dispatch(setGameSpecification({ ...gameSpecification, id: gameID }))
    dispatch(setGameScreenshots({ results: [{ id: 0, image: '' }] }))
  }, [dispatch, gameID])

  const setGameDetails = useCallback(async () => {
    const details = await getGameDetails(gameID)
    const screenshots = await getGameScreenshots(gameID)
    dispatch(setGameSpecification(details))
    dispatch(setGameScreenshots(screenshots))
  }, [dispatch, gameID])

  useEffect(() => {
    cleanGamePage()
    setGameDetails()
  }, [cleanGamePage, setGameDetails])
}

export default useGame
