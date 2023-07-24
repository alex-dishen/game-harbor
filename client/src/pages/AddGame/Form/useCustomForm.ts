import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  setDevelopers,
  setPublishers,
  setSelectedGenres,
  setSelectedPlatforms,
} from 'redux/addGameSlice'
import { GameTypes } from 'api/types'
import { createGame } from 'api/CustomAPI'
import { ResponseT } from 'types'
import { handleResponse } from 'helpers'

export const UseCustomForm = () => {
  const methods = useForm<GameTypes>()
  const { control, reset, handleSubmit } = methods
  const dispatch = useDispatch()

  const resetForm = () => {
    reset()
    dispatch(setSelectedPlatforms([]))
    dispatch(setSelectedGenres([]))
    dispatch(setPublishers([]))
    dispatch(setDevelopers([]))
  }

  const onSubmit = async (data: GameTypes) => {
    const response = (await createGame(data)) as ResponseT

    if (response.status !== 200)
      return handleResponse(response.response.data, dispatch, true)

    resetForm()
    handleResponse('The game is created', dispatch)
  }

  return { methods, control, handleSubmit, resetForm, onSubmit }
}
