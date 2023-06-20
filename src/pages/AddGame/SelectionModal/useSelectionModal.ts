import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import { setPublishers, setDevelopers } from 'redux/addGameSlice'
import { useSelectedOptions } from 'hooks/useSelectedOptions'
import { RootState } from 'redux/types'
import { PlatformsAndGenres, TitleT } from 'pages/AddGame/types'
import { OptionsT } from 'types'

export const useSelectionModal = (title: TitleT) => {
  const dispatch = useDispatch()
  const addGamesState = useSelector((state: RootState) => state.addGame)
  const [publishersInputValue, setPublishersInputValue] = useState('')
  const [developersInputValue, setDevelopersInputValue] = useState('')
  const { publishers, developers } = addGamesState

  const {
    optionsList,
    selectedOptionsList,
    setOptionsList,
    setSelectedOptionsList,
  } = useSelectedOptions()

  const options = optionsList[title]
  const selectedOptions = selectedOptionsList[title]
  const setOptions = setOptionsList[title as PlatformsAndGenres]
  const setSelectedOptions = setSelectedOptionsList[title]

  const setInputValue =
    title === 'Publishers' ? setPublishersInputValue : setDevelopersInputValue

  const handleOptionClick = (option: OptionsT, reverse?: boolean) => {
    const arrayToIterate = reverse ? selectedOptions : options

    const updatedOptions = arrayToIterate?.filter(
      optionList => optionList.name !== option.name,
    )

    const newOptionsList = reverse ? [...options, option] : updatedOptions
    const newSelectedOptions = reverse
      ? updatedOptions
      : [...selectedOptions, option]

    if (setOptions) dispatch(setOptions(newOptionsList))

    dispatch(setSelectedOptions(newSelectedOptions))
  }

  const handlePlusClick = () => {
    if (title === 'Publishers')
      dispatch(
        setPublishers([
          ...publishers,
          { key: uniqid(), name: publishersInputValue },
        ]),
      )

    if (title === 'Developers')
      dispatch(
        setDevelopers([
          ...developers,
          { key: uniqid(), name: developersInputValue },
        ]),
      )
  }

  return {
    options,
    selectedOptions,
    handleOptionClick,
    setInputValue,
    handlePlusClick,
  }
}
