import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { RootState } from 'redux/types';

const useCarousel = () => {
  const reduxStore = useSelector((state: RootState) => state.harbor);

  const gameBackground = {
    id: uniqid(),
    image: reduxStore.gameSpecification.background_image,
  };
  const screenshots = [gameBackground, ...reduxStore.gameScreenshots.results];

  return { screenshots };
};

export default useCarousel;
