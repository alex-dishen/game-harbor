import getData from 'api/api'
import {
  GameTypes,
  GetGameListTypes,
  ResponseSchema,
  ScreenshotsTypes,
} from 'api/types'

export const getGamesList = (params?: GetGameListTypes) =>
  getData<ResponseSchema<GameTypes>>('games', params as Record<string, string>)

export const getGameDetails = (id: number) => getData<GameTypes>(`games/${id}`)

export const getGameScreenshots = (id: number) =>
  getData<ResponseSchema<ScreenshotsTypes>>(`games/${id}/screenshots`)
