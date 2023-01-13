import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Navbar from './pages/Games/components/Navbar';
import Game from './pages/Game/Game';
import './styles/normalize.scss';
import './font/stylesheet.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence>
        <Routes key={1}>
          <Route path="/" element={<Home />} />
          <Route
            path="/games"
            element={
              <>
                <Games />
                {/* <Navbar /> */}
              </>
            }
          />
          <Route path="/games/game" element={<Game />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
