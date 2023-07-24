import { ReactNode } from 'react'
import { OptionsT } from 'types'
import { TitleT } from 'pages/AddGame/types'

export type SelectionProps = {
  emoji: string
  icon?: ReactNode
  description: string
  placeholder: string
  isRequired?: boolean
  title: TitleT | string
  optionsList?: OptionsT[]
  inputDescription?: string
  inputPlaceholder?: string
  onChange: (a: OptionsT[]) => void
}
