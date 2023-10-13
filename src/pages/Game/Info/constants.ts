import { nanoid } from 'nanoid'
import { SpecificationsT } from 'pages/Game/Info/types'

export const specifications: SpecificationsT[] = [
  {
    id: nanoid(),
    name: 'Genres:',
    category: 'genres',
  },
  {
    id: nanoid(),
    name: 'Platforms:',
    category: 'parent_platforms',
  },
  {
    id: nanoid(),
    name: 'Developers:',
    category: 'developers',
  },
  {
    id: nanoid(),
    name: 'Publishers:',
    category: 'publishers',
  },
]
