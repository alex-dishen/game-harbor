import { GameTypes } from 'api/types'

export type TextAreaProps = {
  name: keyof GameTypes
  title: string
  placeHolder: string
  required?: boolean
}
