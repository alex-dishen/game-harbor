import { v4 as uuidv4 } from 'uuid'
import { ORDER_TITLE } from 'pages/Games/constants'

export const orderOptions = [
  { id: uuidv4(), title: ORDER_TITLE.NAME },
  { id: uuidv4(), title: ORDER_TITLE.RELEASE },
  { id: uuidv4(), title: ORDER_TITLE.POPULARITY },
  { id: uuidv4(), title: ORDER_TITLE.RATING },
]
