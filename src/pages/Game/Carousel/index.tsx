import { useRef, useState, useEffect } from 'react';
import { PanInfo, useAnimation } from 'framer-motion';
import { ReactComponent as ChevronLeft } from 'assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/chevron-right.svg';
import { IScreenshots } from 'api/interfaces';
import {
  CarouselWrapper,
  LeftButton,
  ImageHolder,
  Image,
  RightButton,
  DotsWrapper,
  Dot,
  ActiveDot,
} from 'pages/Game/Carousel/styles';

interface CarouselProps {
  screenshots?: IScreenshots[];
}

function Carousel({ screenshots }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const carouselControls = useAnimation();
  const animateCarousel = () => {
    carouselControls.start({ x: `${-index * 100}%` });
  };
  const timeout = useRef<NodeJS.Timer>();
  const setIndexByTimeout = () => {
    timeout.current = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);
  };
  const setIndexByPosition = (_event: never, info: PanInfo) => {
    const { x } = info.offset;
    const carouselWidth = carousel.current?.clientWidth || 1;
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

  return (
    <CarouselWrapper ref={carousel}>
      <LeftButton
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <ChevronLeft />
      </LeftButton>
      <ImageHolder
        drag="x"
        dragMomentum={false}
        onDragStart={() => clearTimeout(timeout.current)}
        onDragEnd={setIndexByPosition}
        initial={{ x: 0 }}
        animate={carouselControls}
        transition={{ duration: 0.6 }}
      >
        {screenshots &&
          screenshots.map((screenshot) => (
            <Image key={screenshot.id} src={screenshot.image} />
          ))}
      </ImageHolder>
      <DotsWrapper>
        {screenshots &&
          screenshots.map((screenshot, i) => (
            <Dot
              key={screenshot.id}
              initial={false}
              animate={{ scale: +(index !== i) }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setIndex(i);
              }}
            />
          ))}
        <ActiveDot
          initial={false}
          transition={{ duration: 0.35 }}
          animate={{ x: index * 22 }}
        />
      </DotsWrapper>
      <RightButton
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <ChevronRight />
      </RightButton>
    </CarouselWrapper>
  );
}

export default Carousel;
