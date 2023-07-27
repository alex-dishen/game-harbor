import { MouseEvent } from 'react'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { HandleAddToCartTypes, LoadGamesTypes } from 'types'
import { setCurrentFilter } from 'redux/harborSlice'
import { setGames, setInCartGames } from 'redux/gamesSlice'
import { getPrice } from 'pages/Games/helpers'
import { GameTypes, ParentPlatformsT, PlatformTypes } from 'api/types'
import { setResponseMessage, setIsError } from 'redux/addGameSlice'
import { gameSpecification } from '../constants'

interface IHandleFilterClick {
  e: MouseEvent<HTMLElement>
  dispatch: Dispatch<AnyAction>
  games: GameTypes[]
  currentFilter?: string
  location?: string
}

export const handleFilterClick = ({
  e,
  dispatch,
  currentFilter,
  games,
}: IHandleFilterClick) => {
  const target = e.target as HTMLElement
  const { textContent } = target

  // games are set to a predefined array in order to display a spinner when
  // refetching data instead of just unexpected screen update
  if (textContent !== currentFilter && games.length > 0)
    dispatch(setGames([gameSpecification]))

  if (textContent) dispatch(setCurrentFilter(textContent))
}

const modifyPlatforms = (array: PlatformTypes[]): ParentPlatformsT[] =>
  array.map(({ platform }) => platform)

const returnIsInCart = (id: number | string, inCartGames: GameTypes[]) =>
  inCartGames.some(game => game.id === id)

export const returnGames = async ({
  games,
  inCartGames,
  getGames,
}: LoadGamesTypes) => {
  const response = getGames ? await getGames() : games

  if (!response) return []

  const results = response.results || response.data
  const modifiedResults = results.map(game => ({
    ...game,
    parent_platforms: response.results
      ? modifyPlatforms(game.parent_platforms)
      : game.parent_platforms,
    price: getPrice(game),
    isInCart: returnIsInCart(game.id, inCartGames),
  }))

  return modifiedResults as GameTypes[]
}

export const handleAddToCart = ({
  gameID,
  games,
  inCartGames,
  dispatch,
}: HandleAddToCartTypes) => {
  const updatedGames = games.map(game => {
    if (game.id == gameID) {
      return { ...game, isInCart: true }
    }

    return game
  })

  dispatch(setGames(updatedGames))

  const newCartGames = updatedGames.filter(
    ({ id, isInCart }) => isInCart && id == gameID,
  )

  dispatch(setInCartGames(inCartGames.concat(newCartGames)))
}

export const emToPx = (emValue: string) => {
  const numericalValue = parseFloat(emValue)

  return numericalValue * 16
}

let timeoutID: NodeJS.Timeout | null = null

export const handleResponse = (
  message: string,
  dispatch: Dispatch<AnyAction>,
  isError?: boolean,
) => {
  if (timeoutID !== null) clearTimeout(timeoutID)

  if (isError) dispatch(setIsError(true))

  dispatch(setResponseMessage(message))

  timeoutID = setTimeout(() => {
    if (isError) dispatch(setIsError(false))

    dispatch(setResponseMessage(''))
  }, 4000)
}
