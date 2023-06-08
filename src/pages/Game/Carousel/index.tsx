import useCarousel from 'pages/Game/Carousel/useCarousel';
import { ReactComponent as ChevronLeft } from 'assets/images/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/images/chevron-right.svg';
import { ImageHolder, Image, StyledSlider } from 'pages/Game/Carousel/styles';

function Carousel() {
  const { screenshots } = useCarousel();

  return (
    <StyledSlider
      loop
      slidesNumber={1}
      showDots={screenshots[1].id !== 0}
      sizeForDefaultDot={9}
      sizeForDefaultActiveDot={11}
      dotColor="rgb(140, 140, 140)"
      activeDotColor="rgb(24, 176, 171)"
      nextButton={screenshots[1].id === 0 || <ChevronRight />}
      prevButton={screenshots[1].id === 0 || <ChevronLeft />}
      dotsAnimation="sliding"
    >
      {screenshots.map(({ id, image }) => (
        <ImageHolder key={id}>
          <Image src={image} />
        </ImageHolder>
      ))}
    </StyledSlider>
  );
}

export default Carousel;
