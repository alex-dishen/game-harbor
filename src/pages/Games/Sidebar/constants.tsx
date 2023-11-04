import { v4 as uuidv4 } from 'uuid'
import {
  RELEASES,
  TOP_GAMES,
  PLATFORMS,
  GENRES,
  CUSTOM_API,
} from '../../../constants'

export const filters = [
  { id: uuidv4(), header: 'Your Games', options: CUSTOM_API },
  {
    id: uuidv4(),
    header: 'NewReleases',
    options: RELEASES,
  },
  {
    id: uuidv4(),
    header: 'Top',
    options: TOP_GAMES,
  },
  {
    id: uuidv4(),
    header: 'Platforms',
    options: PLATFORMS,
  },
  {
    id: uuidv4(),
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
  overflow: 'scroll',
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
  overflow: 'scroll',
}

export const variants = {
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
}
