import { nanoid } from 'nanoid'
import { previousYear } from 'pages/Games/helpers'
import { ReactComponent as Rating } from 'assets/images/rating.svg'
import { ReactComponent as Star } from 'assets/images/star.svg'
import { ReactComponent as Dice } from 'assets/images/dice.svg'
import { ReactComponent as Cup } from 'assets/images/cup.svg'
import { ReactComponent as Crown } from 'assets/images/crown.svg'
import { ReactComponent as Tiles } from 'assets/images/tiles.svg'

const places = [
  { id: nanoid(), name: 'Play Dice', icon: <Dice />, place: 'games/game' },
  { id: nanoid(), name: 'Added Games', icon: <Tiles />, place: 'games' },
  { id: nanoid(), name: 'Last 30 days', icon: <Star />, place: 'games' },
  {
    id: nanoid(),
    name: `Popular in ${previousYear}`,
    icon: <Rating />,
    place: 'games',
  },
  { id: nanoid(), name: 'Best of the year', icon: <Cup />, place: 'games' },
  { id: nanoid(), name: 'All time top', icon: <Crown />, place: 'games' },
]

export default places
