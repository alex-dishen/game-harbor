import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  setDevelopers,
  setPublishers,
  setSelectedGenres,
  setSelectedPlatforms,
} from 'redux/addGameSlice'
import { GameTypes } from 'api/types'

export const UseCustomForm = () => {
  const methods = useForm<GameTypes>()
  const { control, reset, handleSubmit } = methods
  const dispatch = useDispatch()

  const onSubmit = data => {
    console.log(data)
    reset()
    dispatch(setSelectedPlatforms([]))
    dispatch(setSelectedGenres([]))
    dispatch(setPublishers([]))
    dispatch(setDevelopers([]))
  }

  return { methods, control, handleSubmit, onSubmit }
}
