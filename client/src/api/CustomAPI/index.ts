import { GameTypes } from 'api/types'
import axios from 'axios'

const API_URL = 'http://localhost:8000/games'

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

export const deleteStreamer = async (id?: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)

    return response
  } catch (error) {
    return error
  }
}

// export const updateVotes = async (id: string | undefined, newData: VotesT) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}/vote`, newData)

//     return response
//   } catch (error) {
//     return error
//   }
// }
