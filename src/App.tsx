import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Game from './pages/Game/Game';
import './styles/normalize.scss';
import './font/stylesheet.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
