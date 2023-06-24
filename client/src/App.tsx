import { useEffect, useState } from 'react'
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
  const [games, setGames] = useState([])

  const getAllData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/game`)
      const json = await response.json()
      setGames(json)
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  const getData = async () => {
    const title = 'Diablo IV'
    try {
      const response = await fetch(`http://localhost:8000/game/${title}`)
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  const data = {
    title: 'Edited',
    about: 'Edited',
    releaseDate: '2021-03-12',
    website: 'https://edited.com',
  }

  const postData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/game`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        console.log(response)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const editData = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8000/game/${games[4].game_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      )

      if (response.status === 200) {
        console.log('Worked')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const deleteData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/game/${games[5].game_id}`,
        { method: 'DELETE' },
      )

      if (response.status === 200) {
        console.log('Deleted the game')
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>
      <Header />
      <button type="submit" onClick={deleteData} style={{ color: 'white' }}>
        Submit
      </button>
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
