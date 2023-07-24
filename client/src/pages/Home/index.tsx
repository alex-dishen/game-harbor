import Description from 'pages/Home/Description'
import QuickNavigation from 'pages/Home/QuickNavigation'
import useHome from 'pages/Home/useHome'
import { Main, Video } from 'pages/Home/styles'
import video from 'assets/images/pyke.mp4'

const Home = () => {
  useHome()

  return (
    <>
      <Main
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <Description />
        <QuickNavigation />
      </Main>
      <Video
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <source src={video} type="video/mp4" />
      </Video>
    </>
  )
}

export default Home
