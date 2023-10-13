import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderTitle } from 'redux/harborSlice'
import { setGames } from 'redux/gamesSlice'
import { RootState } from 'redux/types'
import useClickOutside from 'hooks/useClickOutside'
import { FILTER_TITLE } from 'pages/Games/constants'
import { gameSpecification } from '../../../constants'

const useTop = () => {
  const dispatch = useDispatch()
  const harborState = useSelector((state: RootState) => state.harbor)
  const [isShowOrder, setIsShowOrder] = useState(true)
  const [isOrderOpen, setIsOrderOpen] = useState(false)
  const orderRef = useRef<HTMLUListElement>(null)

  const { currentFilter, orderTitle, isSearching } = harborState

  const openAndHideOrder = () => {
    setIsOrderOpen(!isOrderOpen)
  }

  const changeTitle = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const { textContent } = target

    if (textContent !== null) dispatch(setOrderTitle(textContent.trim()))
  }

  const handleOptionClick = (e: MouseEvent<HTMLElement>) => {
    changeTitle(e)
    openAndHideOrder()
    dispatch(setGames([gameSpecification]))
  }

  useClickOutside(isOrderOpen, orderRef, openAndHideOrder)

  useEffect(() => {
    if (
      currentFilter === FILTER_TITLE.ALL_TIME_TOP ||
      currentFilter === FILTER_TITLE.POPULAR_PREV_YEAR ||
      currentFilter === FILTER_TITLE.BEST_OF_THE_YEAR ||
      currentFilter === FILTER_TITLE.ADDED_GAMES ||
      isSearching
    )
      return setIsShowOrder(false)

    setIsShowOrder(true)
  }, [currentFilter])

  return {
    currentFilter,
    isShowOrder,
    orderTitle,
    isOrderOpen,
    orderRef,
    openAndHideOrder,
    handleOptionClick,
  }
}

export default useTop
