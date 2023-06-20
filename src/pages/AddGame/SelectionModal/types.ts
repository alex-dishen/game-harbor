import { RefObject } from 'react'
import { OptionsT } from 'types'
import { TitleT } from 'pages/AddGame/types'

export type SelectionModuleProps = {
  title: TitleT
  emoji: string
  popupRef: RefObject<HTMLDivElement>
  description?: string
  placeholder?: string
  optionsList: OptionsT[]
}
