import { previousYear } from 'pages/Games/helpers';
import { ReactComponent as Star } from 'assets/images/star.svg';
import { ReactComponent as Fire } from 'assets/images/fire.svg';
import { ReactComponent as Skip } from 'assets/images/skip.svg';
import { ReactComponent as Cup } from 'assets/images/cup.svg';
import { ReactComponent as Rating } from 'assets/images/rating.svg';
import { ReactComponent as Crown } from 'assets/images/crown.svg';
import { ReactComponent as Windows } from 'assets/images/windows.svg';
import { ReactComponent as PlayStation } from 'assets/images/playstation.svg';
import { ReactComponent as Xbox } from 'assets/images/xbox.svg';
import { ReactComponent as Nintendo } from 'assets/images/nintendo.svg';
import { ReactComponent as Apple } from 'assets/images/apple.svg';
import { ReactComponent as Android } from 'assets/images/android.svg';
import { ReactComponent as Action } from 'assets/images/action.svg';
import { ReactComponent as Strategy } from 'assets/images/strategy.svg';
import { ReactComponent as RPG } from 'assets/images/RPG.svg';
import { ReactComponent as Shooter } from 'assets/images/shooter.svg';
import { ReactComponent as Adventure } from 'assets/images/adventure.svg';
import { ReactComponent as Puzzle } from 'assets/images/puzzle.svg';
import { ReactComponent as Racing } from 'assets/images/racing.svg';
import { ReactComponent as Sports } from 'assets/images/sports.svg';

export const filters = [
  {
    header: 'NewReleases',
    options: [
      { name: 'Last 30 days', icon: <Star /> },
      { name: 'This week', icon: <Fire /> },
      { name: 'Next week', icon: <Skip /> },
    ],
  },
  {
    header: 'Top',
    options: [
      { name: 'Best of the year', icon: <Cup /> },
      { name: `Popular in ${previousYear}`, icon: <Rating /> },
      { name: 'All time top', icon: <Crown /> },
    ],
  },
  {
    header: 'Platforms',
    options: [
      { name: 'PC', icon: <Windows /> },
      { name: 'PlayStation', icon: <PlayStation /> },
      { name: 'Xbox One', icon: <Xbox /> },
      { name: 'Nintendo Switch', icon: <Nintendo /> },
      { name: 'iOS', icon: <Apple /> },
      { name: 'Android', icon: <Android /> },
    ],
  },
  {
    header: 'Genres',
    options: [
      { name: 'Action', icon: <Action /> },
      { name: 'Strategy', icon: <Strategy /> },
      { name: 'RPG', icon: <RPG /> },
      { name: 'Shooter', icon: <Shooter /> },
      { name: 'Adventure', icon: <Adventure /> },
      { name: 'Puzzle', icon: <Puzzle /> },
      { name: 'Racing', icon: <Racing /> },
      { name: 'Sports', icon: <Sports /> },
    ],
  },
];

export const variants = {
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};
