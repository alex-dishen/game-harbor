import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Game from './pages/Game/Game';
import './styles/normalize.scss';
import './font/stylesheet.css';
import getData from './api/api';

function App() {
  const [isChangeNavbar, setIsChangeNavbar] = useState(false);
  const location = useLocation();

  getData();

  return (
    <>
      <Header isChangeNavbar={isChangeNavbar} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/games"
            element={
              <Games
                isChangeNavbar={isChangeNavbar}
                setIsChangeNavbar={setIsChangeNavbar}
              />
            }
          />
          <Route path="/games/game" element={<Game />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
