import { previousYear } from 'pages/Games/helpers';
import { ReactComponent as Rating } from 'assets/rating.svg';
import { ReactComponent as Star } from 'assets/star.svg';
import { ReactComponent as Dice } from 'assets/dice.svg';
// import { ReactComponent as Gift } from 'assets/gift.svg';
import { ReactComponent as Cup } from 'assets/cup.svg';
import { ReactComponent as Crown } from 'assets/crown.svg';

const places = [
  // { name: 'Wish List', icon: <Gift />, place: 'games' },
  { name: 'Play Dice', icon: <Dice />, place: 'games/game' },
  { name: 'Last 30 days', icon: <Star />, place: 'games' },
  { name: `Popular in ${previousYear}`, icon: <Rating />, place: 'games' },
  { name: 'Best of the year', icon: <Cup />, place: 'games' },
  { name: 'All time top', icon: <Crown />, place: 'games' },
];

export default places;
