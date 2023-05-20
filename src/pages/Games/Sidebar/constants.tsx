import uniqid from 'uniqid';
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
import { FILTER_TITLE } from 'pages/Games/constants';

export const filters = [
  {
    id: uniqid(),
    header: 'NewReleases',
    options: [
      { key: uniqid(), name: FILTER_TITLE.LAST_30_DAYS, icon: <Star /> },
      { key: uniqid(), name: FILTER_TITLE.THIS_WEEK, icon: <Fire /> },
      { key: uniqid(), name: FILTER_TITLE.NEXT_WEEK, icon: <Skip /> },
    ],
  },
  {
    id: uniqid(),
    header: 'Top',
    options: [
      { key: uniqid(), name: FILTER_TITLE.BEST_OF_THE_YEAR, icon: <Cup /> },
      { key: uniqid(), name: FILTER_TITLE.POPULAR_PREV_YEAR, icon: <Rating /> },
      { key: uniqid(), name: FILTER_TITLE.ALL_TIME_TOP, icon: <Crown /> },
    ],
  },
  {
    id: uniqid(),
    header: 'Platforms',
    options: [
      { key: uniqid(), name: FILTER_TITLE.PC, icon: <Windows /> },
      { key: uniqid(), name: FILTER_TITLE.PS, icon: <PlayStation /> },
      { key: uniqid(), name: FILTER_TITLE.XBOX, icon: <Xbox /> },
      { key: uniqid(), name: FILTER_TITLE.NINTENDO, icon: <Nintendo /> },
      { key: uniqid(), name: FILTER_TITLE.IOS, icon: <Apple /> },
      { key: uniqid(), name: FILTER_TITLE.ANDROID, icon: <Android /> },
    ],
  },
  {
    id: uniqid(),
    header: 'Genres',
    options: [
      { key: uniqid(), name: FILTER_TITLE.ACTION, icon: <Action /> },
      { key: uniqid(), name: FILTER_TITLE.STRATEGY, icon: <Strategy /> },
      { key: uniqid(), name: FILTER_TITLE.RPG, icon: <RPG /> },
      { key: uniqid(), name: FILTER_TITLE.SHOOTER, icon: <Shooter /> },
      { key: uniqid(), name: FILTER_TITLE.ADVENTURE, icon: <Adventure /> },
      { key: uniqid(), name: FILTER_TITLE.PUZZLE, icon: <Puzzle /> },
      { key: uniqid(), name: FILTER_TITLE.RACING, icon: <Racing /> },
      { key: uniqid(), name: FILTER_TITLE.SPORTS, icon: <Sports /> },
    ],
  },
];

export const aside = {
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  gap: '30px',
  padding: '30px 0 20px 0',
  overflow: 'scroll',
};

export const fullScreen = {
  position: 'fixed',
  zIndex: '5',
  top: '0',
  left: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, auto))',
  gap: '40px',
  height: '100%',
  width: '100%',
  padding: '30px',
  color: 'black',
  overflow: 'scroll',
};

export const variants = {
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
};
