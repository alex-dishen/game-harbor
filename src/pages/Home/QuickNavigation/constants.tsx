import { previousYear } from 'pages/Games/helpers';
import { ReactComponent as Rating } from 'assets/images/rating.svg';
import { ReactComponent as Star } from 'assets/images/star.svg';
import { ReactComponent as Dice } from 'assets/images/dice.svg';
// import { ReactComponent as Gift } from 'assets/images/gift.svg';
import { ReactComponent as Cup } from 'assets/images/cup.svg';
import { ReactComponent as Crown } from 'assets/images/crown.svg';

const places = [
  // { name: 'Wish List', icon: <Gift />, place: 'games' },
  { name: 'Play Dice', icon: <Dice />, place: 'games/game' },
  { name: 'Last 30 days', icon: <Star />, place: 'games' },
  { name: `Popular in ${previousYear}`, icon: <Rating />, place: 'games' },
  { name: 'Best of the year', icon: <Cup />, place: 'games' },
  { name: 'All time top', icon: <Crown />, place: 'games' },
];

export default places;
