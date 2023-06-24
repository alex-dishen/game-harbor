import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { RootState } from 'redux/types'

const useCarousel = () => {
  const gamesState = useSelector((state: RootState) => state.games)

  const { gameSpecification, gameScreenshots } = gamesState

  const gameBackground = {
    id: nanoid(),
    image: gameSpecification.background_image,
  }
  const screenshots = [gameBackground, ...gameScreenshots.results]

  return { screenshots }
}

export default useCarousel
