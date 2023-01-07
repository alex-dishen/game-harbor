import Header from './components/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Game from './pages/Game';
import './styles/normalize.scss';
import './font/stylesheet.css';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Games /> */}
      <Game />
    </>
  );
}

export default App;
