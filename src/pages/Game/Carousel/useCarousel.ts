import { useSelector } from 'react-redux'
import uniqid from 'uniqid'
import { RootState } from 'redux/types'

const useCarousel = () => {
  const gamesState = useSelector((state: RootState) => state.games)

  const { gameSpecification, gameScreenshots } = gamesState

  const gameBackground = {
    id: uniqid(),
    image: gameSpecification.background_image,
  }
  const screenshots = [gameBackground, ...gameScreenshots.results]

  return { screenshots }
}

export default useCarousel
