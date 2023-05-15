import uniqid from 'uniqid';
import { previousYear } from 'pages/Games/helpers';
import { ReactComponent as Rating } from 'assets/images/rating.svg';
import { ReactComponent as Star } from 'assets/images/star.svg';
import { ReactComponent as Dice } from 'assets/images/dice.svg';
import { ReactComponent as Cup } from 'assets/images/cup.svg';
import { ReactComponent as Crown } from 'assets/images/crown.svg';

const places = [
  { id: uniqid(), name: 'Play Dice', icon: <Dice />, place: 'games/game' },
  { id: uniqid(), name: 'Last 30 days', icon: <Star />, place: 'games' },
  {
    id: uniqid(),
    name: `Popular in ${previousYear}`,
    icon: <Rating />,
    place: 'games',
  },
  { id: uniqid(), name: 'Best of the year', icon: <Cup />, place: 'games' },
  { id: uniqid(), name: 'All time top', icon: <Crown />, place: 'games' },
];

export default places;
