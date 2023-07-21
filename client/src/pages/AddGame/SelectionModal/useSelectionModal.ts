import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { useFormContext } from 'react-hook-form'
import { setPublishers, setDevelopers } from 'redux/addGameSlice'
import { useSelectedOptions } from 'hooks/useSelectedOptions'
import { RootState } from 'redux/types'
import { GameTypes } from 'api/types'
import { OptionsT } from 'types'
import { PlatformsAndGenres, TitleT } from 'pages/AddGame/types'

export const useSelectionModal = (
  title: TitleT,
  onChange: (a: OptionsT[]) => void,
) => {
  const dispatch = useDispatch()
  const addGamesState = useSelector((state: RootState) => state.addGame)
  const { publishers, developers } = addGamesState
  const { watch, setValue } = useFormContext<GameTypes>()

  const publisherValue = watch('publisher_value')
  const developerValue = watch('developer_value')

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
  const inputName: keyof GameTypes =
    title === 'Publishers' ? 'publisher_value' : 'developer_value'

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
    onChange(newSelectedOptions)
  }

  const handlePlusClick = () => {
    if (title === 'Publishers' && publisherValue) {
      dispatch(
        setPublishers([...publishers, { id: nanoid(), name: publisherValue }]),
      )
      setValue('publisher_value', '')
      setValue('publishers', [
        ...publishers,
        { id: nanoid(), name: publisherValue },
      ])
    }

    if (title === 'Developers' && developerValue) {
      dispatch(
        setDevelopers([...developers, { id: nanoid(), name: developerValue }]),
      )
      setValue('developer_value', '')
      setValue('developers', [
        ...developers,
        { id: nanoid(), name: developerValue },
      ])
    }
  }

  return {
    options,
    inputName,
    selectedOptions,
    handlePlusClick,
    handleOptionClick,
  }
}
