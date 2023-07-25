import { GameTypes } from 'api/types'
import axios from 'axios'

const API_URL = import.meta.env.VITE_CUSTOM_API_URL

export const getAllGames = async () => {
  try {
    const response = await axios.get(API_URL)

    return response
  } catch (error) {
    return error
  }
}

export const getGame = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)

    return response
  } catch (error) {
    return error
  }
}

export const createGame = async (streamerData: GameTypes) => {
  try {
    const response = await axios.post(API_URL, streamerData)

    return response
  } catch (error) {
    return error
  }
}

export const deleteGame = async (id: string | number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)

    return response
  } catch (error) {
    return error
  }
}
