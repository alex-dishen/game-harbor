import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from 'pages/Home';
import Games from 'pages/Games';
import Game from 'pages/Game';
import AddGame from 'pages/AddGame';
import Header from 'components/Header';
import useScrollToTop from 'hooks/useScrollToTop';
import 'styles/normalize.css';
import 'styles/fonts.css';

function App() {
  const location = useLocation();
  useScrollToTop();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/game" element={<Game />} />
          <Route path="/add-game" element={<AddGame />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
