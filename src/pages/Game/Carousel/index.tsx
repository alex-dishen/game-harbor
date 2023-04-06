import useCarousel from 'pages/Game/Carousel/useCarousel';
import { ReactComponent as ChevronLeft } from 'assets/images/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/images/chevron-right.svg';
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

function Carousel() {
  const {
    carouselRef,
    index,
    timeout,
    carouselControls,
    screenshots,
    setIndex,
    setIndexByPosition,
  } = useCarousel();

  return (
    <CarouselWrapper ref={carouselRef}>
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
        onMouseDown={(e) => e.preventDefault()}
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
