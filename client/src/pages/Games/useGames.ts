import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { setIsChangeSidebar, setIsHideSidebar } from 'redux/harborSlice'
import { setGames } from 'redux/gamesSlice'
import { getGamesList } from 'api/gameData'
import { RootState } from 'redux/types'
import { emToPx, returnGames } from 'helpers'
import { ORDER_TITLE, FILTER_TITLE } from 'pages/Games/constants'
import {
  getLast30Days,
  getThisWeek,
  getNextWeek,
  getThisYear,
  getPreviousYear,
} from 'pages/Games/helpers'
import { getAllGames } from 'api/CustomAPI'
import { RAWGResponseT, ResponseSchema } from 'api/types'

const useGames = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const harborState = useSelector((state: RootState) => state.harbor)
  const gamesState = useSelector((state: RootState) => state.games)
  const [isShowMenu, setIsShowMenu] = useState(false)

  const responseMessage = useSelector(
    (state: RootState) => state.addGame.responseMessage,
  )
  const { currentFilter, orderTitle, isChangeSidebar, isHideSidebar } =
    harborState

  const { games, inCartGames } = gamesState

  const manipulateSideBar = () => {
    const { innerWidth } = window

    if (innerWidth <= emToPx(theme.breakpoints.md)) {
      setIsShowMenu(true)

      // This check prevents sidebar from hiding when
      // it is opened and user resizes the screen
      if (isHideSidebar) return

      dispatch(setIsHideSidebar(true))
      dispatch(setIsChangeSidebar(true))

      return
    }

    setIsShowMenu(false)
    dispatch(setIsHideSidebar(false))
    dispatch(setIsChangeSidebar(false))
  }

  const getOrder = () => {
    switch (orderTitle) {
      case ORDER_TITLE.RELEASE:
        return '-released'

      case ORDER_TITLE.POPULARITY:
        return '-added'

      case ORDER_TITLE.NAME:
        return 'name'

      case ORDER_TITLE.RATING:
        return '-rating'
    }
  }

  const getGames = () => {
    switch (currentFilter) {
      case FILTER_TITLE.ADDED_GAMES:
        return getAllGames() as Promise<ResponseSchema<RAWGResponseT>>

      case FILTER_TITLE.LAST_30_DAYS:
        return getGamesList({ dates: getLast30Days(), ordering: getOrder() })

      case FILTER_TITLE.THIS_WEEK:
        return getGamesList({ dates: getThisWeek(), ordering: getOrder() })

      case FILTER_TITLE.NEXT_WEEK:
        return getGamesList({ dates: getNextWeek(), ordering: getOrder() })

      case FILTER_TITLE.BEST_OF_THE_YEAR:
        return getGamesList({ dates: getThisYear(), ordering: '-added' })

      case FILTER_TITLE.POPULAR_PREV_YEAR:
        return getGamesList({ dates: getPreviousYear(), ordering: '-added' })

      case FILTER_TITLE.ALL_TIME_TOP:
        return getGamesList({ page_size: 40, ordering: '-added' })

      case FILTER_TITLE.PC:
        return getGamesList({ parent_platforms: 1, ordering: getOrder() })

      case FILTER_TITLE.PS:
        return getGamesList({ parent_platforms: 2, ordering: getOrder() })

      case FILTER_TITLE.XBOX:
        return getGamesList({ parent_platforms: 3, ordering: getOrder() })

      case FILTER_TITLE.NINTENDO:
        return getGamesList({ parent_platforms: 7, ordering: getOrder() })

      case FILTER_TITLE.IOS:
        return getGamesList({ parent_platforms: 5, ordering: getOrder() })

      case FILTER_TITLE.ANDROID:
        return getGamesList({ parent_platforms: 8, ordering: getOrder() })

      case FILTER_TITLE.RPG:
        return getGamesList({
          genres: 'role-playing-games-rpg',
          ordering: getOrder(),
        })

      default:
        return getGamesList({
          genres: currentFilter.toLocaleLowerCase(),
          ordering: getOrder(),
        })
    }
  }

  const loadGames = async () => {
    // Prevents Games page from loading and fetching data after
    // getting back to it from Game page as data didn't change
    if (games.length > 1) return

    const results = await returnGames({
      getGames,
      inCartGames,
    })

    // When user opens Games page from search bar the currentFilter === ''
    // and results are set to empty array. To prevent games from getting
    // reset to empty array the condition below is used
    if (results?.length === 0) return

    if (results) dispatch(setGames(results))
  }

  const handleOnClick = () => {
    dispatch(setIsHideSidebar(!isHideSidebar))
  }

  useEffect(() => {
    manipulateSideBar()

    window.addEventListener('resize', manipulateSideBar)

    return () => {
      window.removeEventListener('resize', manipulateSideBar)
    }
  }, [isChangeSidebar])

  useEffect(() => {
    loadGames()
  }, [currentFilter, orderTitle])

  return { games, isShowMenu, responseMessage, isHideSidebar, handleOnClick }
}

export default useGames
