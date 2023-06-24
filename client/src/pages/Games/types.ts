import { MotionProps } from 'framer-motion'
import { GameTypes } from 'api/types'

export type StyledGamePageTypes = MotionProps & {
  GAMES: GameTypes[] | undefined
}

export type OverflowTypes = {
  isHideSidebar: boolean
}
