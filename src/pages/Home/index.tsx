import Description from 'pages/Home/Description';
import QuickNavigation from 'pages/Home/QuickNavigation';
import video from 'assets/pyke.mp4';
import { Main, Video } from 'pages/Home/styles';

interface HomeProps {
  setCurrentFilter: (a: string) => void;
}
function Home({ setCurrentFilter }: HomeProps) {
  return (
    <>
      <Main
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <Description />
        <QuickNavigation setCurrentFilter={setCurrentFilter} />
      </Main>
      <Video
        autoPlay
        muted
        loop
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, x: -25 }}
      >
        <source src={video} type="video/mp4" />
      </Video>
    </>
  );
}

export default Home;
