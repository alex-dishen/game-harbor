import { ReactComponent as Controller } from '../assets/controller.svg';
import { ReactComponent as Dice } from '../assets/dice.svg';
import { ReactComponent as Gift } from '../assets/gift.svg';
import { ReactComponent as Cup } from '../assets/cup.svg';
import { ReactComponent as Crown } from '../assets/crown.svg';

const SVGSize = { height: '20px', width: '20px' };

const places = [
  { name: 'Games', icon: <Controller style={SVGSize} /> },
  { name: 'Play Dice', icon: <Dice style={SVGSize} /> },
  { name: 'Wish List', icon: <Gift style={SVGSize} /> },
  { name: 'Best of the year', icon: <Cup style={SVGSize} /> },
  { name: 'All time top 250', icon: <Crown style={SVGSize} /> },
];

export default places;
