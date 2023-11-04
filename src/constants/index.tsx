import { v4 as uuidv4 } from 'uuid'
import { FILTER_TITLE } from 'pages/Games/constants'
import { ReactComponent as Xbox } from 'assets/images/xbox.svg'
import { ReactComponent as Windows } from 'assets/images/windows.svg'
import { ReactComponent as Strategy } from 'assets/images/strategy.svg'
import { ReactComponent as Star } from 'assets/images/star.svg'
import { ReactComponent as Sports } from 'assets/images/sports.svg'
import { ReactComponent as Skip } from 'assets/images/skip.svg'
import { ReactComponent as Shooter } from 'assets/images/shooter.svg'
import { ReactComponent as RPG } from 'assets/images/RPG.svg'
import { ReactComponent as Rating } from 'assets/images/rating.svg'
import { ReactComponent as Racing } from 'assets/images/racing.svg'
import { ReactComponent as Puzzle } from 'assets/images/puzzle.svg'
import { ReactComponent as PlayStation } from 'assets/images/playstation.svg'
import { ReactComponent as Fire } from 'assets/images/fire.svg'
import { ReactComponent as Cup } from 'assets/images/cup.svg'
import { ReactComponent as Crown } from 'assets/images/crown.svg'
import { ReactComponent as Nintendo } from 'assets/images/nintendo.svg'
import { ReactComponent as Apple } from 'assets/images/apple.svg'
import { ReactComponent as Android } from 'assets/images/android.svg'
import { ReactComponent as Adventure } from 'assets/images/adventure.svg'
import { ReactComponent as Action } from 'assets/images/action.svg'
import { ReactComponent as Tiles } from 'assets/images/tiles.svg'

export const CUSTOM_API = [
  { id: uuidv4(), name: FILTER_TITLE.ADDED_GAMES, icon: <Tiles /> },
]

export const RELEASES = [
  { id: uuidv4(), name: FILTER_TITLE.LAST_30_DAYS, icon: <Star /> },
  { id: uuidv4(), name: FILTER_TITLE.THIS_WEEK, icon: <Fire /> },
  { id: uuidv4(), name: FILTER_TITLE.NEXT_WEEK, icon: <Skip /> },
]

export const TOP_GAMES = [
  { id: uuidv4(), name: FILTER_TITLE.BEST_OF_THE_YEAR, icon: <Cup /> },
  { id: uuidv4(), name: FILTER_TITLE.POPULAR_PREV_YEAR, icon: <Rating /> },
  { id: uuidv4(), name: FILTER_TITLE.ALL_TIME_TOP, icon: <Crown /> },
]

export const PLATFORMS = [
  {
    id: uuidv4(),
    name: FILTER_TITLE.PC,
    icon: <Windows />,
    slug: 'pc',
  },

  {
    id: uuidv4(),
    name: FILTER_TITLE.PS,
    icon: <PlayStation />,
    slug: 'playstation',
  },
  {
    id: uuidv4(),
    name: FILTER_TITLE.XBOX,
    icon: <Xbox />,
    slug: 'xbox',
  },
  {
    id: uuidv4(),
    name: FILTER_TITLE.NINTENDO,
    icon: <Nintendo />,
    slug: 'nintendo',
  },
  {
    id: uuidv4(),
    name: FILTER_TITLE.IOS,
    icon: <Apple />,
    slug: 'android',
  },
  {
    id: uuidv4(),
    name: FILTER_TITLE.ANDROID,
    icon: <Android />,
    slug: 'mac',
  },
]

export const GENRES = [
  { id: uuidv4(), name: FILTER_TITLE.ACTION, icon: <Action /> },
  { id: uuidv4(), name: FILTER_TITLE.STRATEGY, icon: <Strategy /> },
  { id: uuidv4(), name: FILTER_TITLE.RPG, icon: <RPG /> },
  { id: uuidv4(), name: FILTER_TITLE.SHOOTER, icon: <Shooter /> },
  { id: uuidv4(), name: FILTER_TITLE.ADVENTURE, icon: <Adventure /> },
  { id: uuidv4(), name: FILTER_TITLE.PUZZLE, icon: <Puzzle /> },
  { id: uuidv4(), name: FILTER_TITLE.RACING, icon: <Racing /> },
  { id: uuidv4(), name: FILTER_TITLE.SPORTS, icon: <Sports /> },
]

export enum PATHS {
  home = '/',
  games = '/games',
  game = '/games/game/:id',
  addGame = '/add-game',
}

export const gameSpecification = {
  id: -1,
  name: '',
  price: 0,
  isInCart: false,
  description_raw: '',
  website: '',
  released: '',
  background_image: '',
  developers: [{ id: '', name: '' }],
  publishers: [{ id: '', name: '' }],
  parent_platforms: [{ id: 0, slug: '', name: '' }],
  platforms: [{ platform: { id: 0, slug: '', name: '' } }],
  genres: [{ id: '', name: '' }],
  short_screenshots: [{ id: 0, image: '' }],
}
