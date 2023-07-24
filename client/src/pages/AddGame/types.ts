import { GameTypes } from 'api/types'
import { OptionsT } from 'types'

export type PlatformsAndGenres = 'Platforms' | 'Genres'

export type PublishersAndDevelopers = 'Publishers' | 'Developers'

export type TitleT = PlatformsAndGenres | PublishersAndDevelopers

export type GameDetailsT = {
  id: string
  title: string
  name: keyof GameTypes
  isRequired?: boolean
  placeholder: string
  emoji: string
  description: string
  inputDescription: string
  inputPlaceholder: string
  optionsList?: OptionsT[]
}
