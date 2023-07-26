import { deleteGame } from 'api/CustomAPI'
import { handleResponse } from 'helpers'
import { useDispatch, useSelector } from 'react-redux'
import { setGames } from 'redux/gamesSlice'
import { RootState } from 'redux/types'
import { ResponseT } from 'types'

const useGameList = () => {
  const dispatch = useDispatch()
  const gamesState = useSelector((state: RootState) => state.games)

  const { games, inCartGames } = gamesState

  const onDeleteGame = async (id: number | string) => {
    if (games.length <= 1)
      return handleResponse("You can't delete the last game", dispatch, true)

    const updatedGames = games.filter(game => game.id !== id)

    dispatch(setGames(updatedGames))

    const response = (await deleteGame(id)) as ResponseT

    if (response.status !== 200)
      return handleResponse(response.response.data, dispatch, true)
  }

  return {
    games,
    inCartGames,
    dispatch,
    onDeleteGame,
  }
}

export default useGameList
