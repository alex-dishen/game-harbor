import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getGamesList } from 'api/gameData'
import { setCurrentFilter, setIsSearching } from 'redux/harborSlice'
import { setGames } from 'redux/gamesSlice'
import { handleFilterClick, returnGames } from 'helpers'
import { RootState } from 'redux/types'

const useQuickNavigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const gamesState = useSelector((state: RootState) => state.games)

  const { games, inCartGames } = gamesState

  const getRandomID = async () => {
    const randomPage = Math.floor(Math.random() * 10) + 1
    const response = await getGamesList({
      page: randomPage,
      page_size: 40,
      ordering: '-added',
    })
    const results = await returnGames({ games: response, inCartGames })

    if (!results) return

    // We set games here to be able to click Back To Harbor what opens a
    // catalog of games and so we could see the list of games
    dispatch(setGames(results))
    const IDs = results.map(result => result.id)
    const randomIndex = Math.floor(Math.random() * 40)

    return IDs[randomIndex]
  }

  const setRandomGame = async () => {
    const randomID = await getRandomID()

    if (randomID) navigate(`games/game/${randomID}`)

    dispatch(setCurrentFilter(''))
    dispatch(setIsSearching(true))
  }

  const handleOnClick = (e: MouseEvent<HTMLElement>, name: string) => {
    handleFilterClick({ e, dispatch, games })

    if (name !== 'Play Dice') return

    setRandomGame()
  }

  return { handleOnClick }
}

export default useQuickNavigation
