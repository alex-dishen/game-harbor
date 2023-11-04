import { v4 as uuidv4 } from 'uuid'
import { previousYear } from 'pages/Games/helpers'
import { ReactComponent as Rating } from 'assets/images/rating.svg'
import { ReactComponent as Star } from 'assets/images/star.svg'
import { ReactComponent as Dice } from 'assets/images/dice.svg'
import { ReactComponent as Cup } from 'assets/images/cup.svg'
import { ReactComponent as Crown } from 'assets/images/crown.svg'
import { ReactComponent as Tiles } from 'assets/images/tiles.svg'

const places = [
  { id: uuidv4(), name: 'Play Dice', icon: <Dice />, place: 'games/game' },
  { id: uuidv4(), name: 'Added Games', icon: <Tiles />, place: 'games' },
  { id: uuidv4(), name: 'Last 30 days', icon: <Star />, place: 'games' },
  {
    id: uuidv4(),
    name: `Popular in ${previousYear}`,
    icon: <Rating />,
    place: 'games',
  },
  { id: uuidv4(), name: 'Best of the year', icon: <Cup />, place: 'games' },
  { id: uuidv4(), name: 'All time top', icon: <Crown />, place: 'games' },
]

export default places
