import { useDispatch, useSelector } from 'react-redux'
import { setGames } from 'redux/gamesSlice'
import { setIsOpenSearchGames } from 'redux/harborSlice'
import { RootState } from 'redux/types'

const useSearchGames = () => {
  const dispatch = useDispatch()
  const gamesState = useSelector((state: RootState) => state.games)

  const { searchedGames } = gamesState

  const games = searchedGames.slice(0, 8)

  const handleOnClick = () => {
    dispatch(setIsOpenSearchGames(false))
    dispatch(setGames(searchedGames))
  }

  return { games, handleOnClick }
}

export default useSearchGames
