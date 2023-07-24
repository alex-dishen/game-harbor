import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectedOptions } from 'hooks/useSelectedOptions'
import useClickOutside from 'hooks/useClickOutside'
import { OptionsT } from 'types'
import { PlatformsAndGenres, TitleT } from 'pages/AddGame/types'

export const useSelectionInput = (options: OptionsT[], title: TitleT) => {
  const dispatch = useDispatch()
  const [isOpenSelections, setIsOpenSelections] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<OptionsT[]>([])
  const popupRef = useRef<HTMLDivElement>(null)

  const { selectedOptionsList, setOptionsList } = useSelectedOptions()

  const handleSetIsOpenSelections = () => setIsOpenSelections(!isOpenSelections)

  useClickOutside(isOpenSelections, popupRef, handleSetIsOpenSelections)

  useEffect(() => {
    setSelectedOptions(selectedOptionsList[title])
  }, [selectedOptionsList, title])

  useEffect(() => {
    if (options.length !== 0)
      dispatch(setOptionsList[title as PlatformsAndGenres](options))
  }, [dispatch, options, title])

  return {
    isOpenSelections,
    popupRef,
    selectedOptions,
    setIsOpenSelections,
  }
}
