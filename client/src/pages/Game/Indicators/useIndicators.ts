import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'redux/types'
import { cutOffGame } from '../helpers'

const usePrice = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const gamesState = useSelector((state: RootState) => state.games)
  const [gamePrice, setGamePrice] = useState(0)
  const [isInCart, setIsInCart] = useState(false)

  const { games, inCartGames } = gamesState
  const gameID = cutOffGame(location.pathname)

  const getGamePrice = () => {
    const currentGame = games.filter(game => game)

    if (currentGame.length === 0) return 0

    setGamePrice(currentGame[0].price)
  }

  const returnIsGameInCart = () => {
    const currentGame = games.filter(game => game.id == gameID)

    const isGameInCart = inCartGames.filter(game => game.id == gameID)

    setIsInCart(currentGame[0]?.isInCart || isGameInCart.length !== 0)
  }

  useEffect(() => {
    getGamePrice()
    returnIsGameInCart()
  }, [games])

  return {
    games,
    gameID,
    gamePrice,
    isInCart,
    inCartGames,
    dispatch,
  }
}

export default usePrice
