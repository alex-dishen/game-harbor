import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGames } from 'redux/gamesSlice'

// This hook is needed to show the full page spinner when user
// exits Games page to Home page and then enters Games page again
const useHome = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGames([]))
  }, [dispatch])
}

export default useHome
