import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from 'pages/Home'
import Games from 'pages/Games'
import Game from 'pages/Game'
import AddGame from 'pages/AddGame'
import useScrollToTop from 'hooks/useScrollToTop'
import Header from 'components/Header'
import { PATHS } from './constants'
import 'styles/normalize.css'
import 'styles/fonts.css'

const App = () => {
  const location = useLocation()
  useScrollToTop()

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.games} element={<Games />} />
          <Route path={PATHS.game} element={<Game />} />
          <Route path={PATHS.addGame} element={<AddGame />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
