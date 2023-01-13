import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Game from './pages/Game/Game';
import './styles/normalize.scss';
import './font/stylesheet.css';

function App() {
  const [isChangeNavbar, setIsChangeNavbar] = useState(false);
  return (
    <BrowserRouter>
      <Header isChangeNavbar={isChangeNavbar} />
      <AnimatePresence>
        <Routes>
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
    </BrowserRouter>
  );
}

export default App;
