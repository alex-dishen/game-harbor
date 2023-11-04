import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from 'redux/types'

const useCarousel = () => {
  const gamesState = useSelector((state: RootState) => state.games)

  const { gameSpecification, gameScreenshots } = gamesState

  const gameBackground = {
    id: uuidv4(),
    image: gameSpecification.background_image,
  }
  const screenshots = [gameBackground, ...gameScreenshots.results]

  return { screenshots }
}

export default useCarousel
