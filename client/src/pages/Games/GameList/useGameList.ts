import { useDispatch, useSelector } from 'react-redux'
import { setGameID } from 'redux/gamesSlice'
import { RootState } from 'redux/types'

const useGameList = () => {
  const dispatch = useDispatch()
  const gamesState = useSelector((state: RootState) => state.games)

  const { games, inCartGames } = gamesState

  const handleNavigation = (gameID: number) => {
    dispatch(setGameID(gameID))
  }

  return {
    games,
    inCartGames,
    dispatch,
    handleNavigation,
  }
}

export default useGameList
