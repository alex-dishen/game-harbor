import { RefObject } from 'react'
import { TitleT } from 'pages/AddGame/types'
import { OptionsT } from 'types'

export type SelectionModuleProps = {
  title: TitleT
  emoji: string
  popupRef: RefObject<HTMLDivElement>
  description?: string
  placeholder?: string
  optionsList: OptionsT[]
  onChange: (a: OptionsT[]) => void
}
