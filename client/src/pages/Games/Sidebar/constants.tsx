import { nanoid } from 'nanoid'
import {
  RELEASES,
  TOP_GAMES,
  PLATFORMS,
  GENRES,
  CUSTOM_API,
} from '../../../constants'

export const filters = [
  { id: nanoid(), header: 'Your Games', options: CUSTOM_API },
  {
    id: nanoid(),
    header: 'NewReleases',
    options: RELEASES,
  },
  {
    id: nanoid(),
    header: 'Top',
    options: TOP_GAMES,
  },
  {
    id: nanoid(),
    header: 'Platforms',
    options: PLATFORMS,
  },
  {
    id: nanoid(),
    header: 'Genres',
    options: GENRES,
  },
]

export const aside = {
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  gap: '30px',
  padding: '30px 0 20px 0',
  overflow: 'auto',
}

export const fullScreen = {
  position: 'fixed',
  zIndex: '5',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  color: 'black',
  overflow: 'auto',
}

export const variants = {
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
}
