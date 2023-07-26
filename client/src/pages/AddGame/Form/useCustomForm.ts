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
import { useState } from 'react'

export const UseCustomForm = () => {
  const dispatch = useDispatch()
  const [showLoader, setShowLoader] = useState(false)
  const methods = useForm<GameTypes>()

  const { control, reset, handleSubmit } = methods

  const resetForm = () => {
    reset()
    dispatch(setSelectedPlatforms([]))
    dispatch(setSelectedGenres([]))
    dispatch(setPublishers([]))
    dispatch(setDevelopers([]))
  }

  const onSubmit = async (data: GameTypes) => {
    setShowLoader(true)
    const response = (await createGame(data)) as ResponseT

    if (response.status !== 200) {
      setShowLoader(false)

      return handleResponse(response.response.data, dispatch, true)
    }

    setShowLoader(false)
    resetForm()
    handleResponse('The game is created', dispatch)
  }

  return { methods, control, showLoader, handleSubmit, resetForm, onSubmit }
}
