import { v4 as uuidv4 } from 'uuid'
import { SpecificationsT } from 'pages/Game/Info/types'

export const specifications: SpecificationsT[] = [
  {
    id: uuidv4(),
    name: 'Genres:',
    category: 'genres',
  },
  {
    id: uuidv4(),
    name: 'Platforms:',
    category: 'parent_platforms',
  },
  {
    id: uuidv4(),
    name: 'Developers:',
    category: 'developers',
  },
  {
    id: uuidv4(),
    name: 'Publishers:',
    category: 'publishers',
  },
]
