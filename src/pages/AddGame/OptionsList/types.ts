import { OptionsT } from 'types'

export type OptionsListProps = {
  value: OptionsT[]
  reverse?: boolean
  alignToStart?: boolean
  onClick: (value: OptionsT, reverse?: boolean) => void
}

export type OptionsHolderT = {
  alignToStart?: boolean
}
