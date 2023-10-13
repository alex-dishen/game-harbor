import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGames, setInCartGames } from 'redux/gamesSlice'
import { setIsOpenCart } from 'redux/harborSlice'
import { RootState } from 'redux/types'
import useClickOutside from 'hooks/useClickOutside'

const useCart = () => {
  const dispatch = useDispatch()
  const gamesState = useSelector((state: RootState) => state.games)
  const cartRef = useRef<HTMLDivElement>(null)

  const isOpenCart = useSelector((state: RootState) => state.harbor.isOpenCart)
  const { inCartGames, games } = gamesState

  const returnGamesPriceSum = () => {
    const gamesPrices = inCartGames.map(game => game.price)

    if (gamesPrices.length === 0) return 0

    const totalPrice = gamesPrices
      .reduce((accumulator, currentValue) => accumulator + currentValue)
      .toFixed(2)

    return totalPrice
  }

  const hideCart = () => {
    dispatch(setIsOpenCart(false))
    document.body.style.overflow = ''
  }

  const clearInCartGames = () => {
    const updatedGames = games.map(game => {
      if (game.isInCart) {
        return { ...game, isInCart: false }
      }

      return game
    })

    dispatch(setInCartGames([]))
    dispatch(setGames(updatedGames))
  }

  const deleteGame = (gameID: number | string) => {
    const updatedInCartGames = inCartGames.map(game => {
      if (game.id === gameID) {
        return { ...game, isInCart: false }
      }

      return game
    })

    const filteredGames = updatedInCartGames.filter(game => game.isInCart)

    const updatedGames = games.map(game => {
      if (game.id === gameID) {
        return { ...game, isInCart: false }
      }

      return game
    })

    dispatch(setInCartGames(filteredGames))
    dispatch(setGames(updatedGames))
  }

  useClickOutside(isOpenCart, cartRef, hideCart)

  return {
    cartRef,
    inCartGames,
    hideCart,
    deleteGame,
    clearInCartGames,
    returnGamesPriceSum,
  }
}

export default useCart
