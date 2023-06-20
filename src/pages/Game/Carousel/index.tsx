import { useTheme } from 'styled-components'
import useCarousel from 'pages/Game/Carousel/useCarousel'
import { ReactComponent as ChevronLeft } from 'assets/images/chevron-left.svg'
import { ReactComponent as ChevronRight } from 'assets/images/chevron-right.svg'
import { ImageHolder, Image, StyledSlider } from 'pages/Game/Carousel/styles'

const Carousel = () => {
  const { screenshots } = useCarousel()
  const theme = useTheme()

  return (
    <StyledSlider
      loop
      slidesNumber={1}
      showDots={screenshots[1].id !== 0}
      sizeForDefaultDot={9}
      sizeForDefaultActiveDot={11}
      dotColor={theme.colors.white[50]}
      activeDotColor={theme.colors.teal[100]}
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
  )
}

export default Carousel
