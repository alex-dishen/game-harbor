import { GameTypes } from 'api/types'

export type InputProps = {
  type: string
  name: keyof GameTypes
  title: string
  placeHolder?: string
  required?: boolean
  icon?: JSX.Element
  onClick?: () => void
}
