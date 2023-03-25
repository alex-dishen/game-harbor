import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { PanInfo, useAnimation } from 'framer-motion';
import uniqid from 'uniqid';
import { RootState } from 'redux/types';

const useCarousel = () => {
  const reduxStore = useSelector((state: RootState) => state.harbor);
  const [index, setIndex] = useState(0);
  const carouselControls = useAnimation();
  const timeout = useRef<NodeJS.Timer>();
  const carouselRef = useRef<HTMLDivElement>(null);

  const gameBackground = {
    id: uniqid(),
    image: reduxStore.gameSpecification.background_image,
  };
  const screenshots = [gameBackground, ...reduxStore.gameScreenshots.results];

  const animateCarousel = () => {
    carouselControls.start({ x: `${-index * 100}%` });
  };

  const setIndexByTimeout = () => {
    timeout.current = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);
  };

  const setIndexByPosition = (_event: never, info: PanInfo) => {
    const { x } = info.offset;
    const carouselWidth = carouselRef.current?.clientWidth || 1;
    const initialOffset = index * carouselWidth;
    const newIndex = Math.round((initialOffset + x * -2) / carouselWidth);
    if (newIndex !== index) {
      setIndex(newIndex);
    } else {
      animateCarousel();
      setIndexByTimeout();
    }
  };

  useEffect(() => {
    if (!screenshots) return;

    animateCarousel();
    if (index >= screenshots.length) return setIndex(0);

    if (index < 0) return setIndex(screenshots.length - 1);

    setIndexByTimeout();

    return () => clearTimeout(timeout.current);
  }, [index]);

  return {
    carouselRef,
    index,
    timeout,
    carouselControls,
    screenshots,
    setIndex,
    setIndexByPosition,
  };
};

export default useCarousel;
