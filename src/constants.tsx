import { nanoid } from 'nanoid'
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

export const RELEASES = [
  { key: nanoid(), name: FILTER_TITLE.LAST_30_DAYS, icon: <Star /> },
  { key: nanoid(), name: FILTER_TITLE.THIS_WEEK, icon: <Fire /> },
  { key: nanoid(), name: FILTER_TITLE.NEXT_WEEK, icon: <Skip /> },
]

export const TOP_GAMES = [
  { key: nanoid(), name: FILTER_TITLE.BEST_OF_THE_YEAR, icon: <Cup /> },
  { key: nanoid(), name: FILTER_TITLE.POPULAR_PREV_YEAR, icon: <Rating /> },
  { key: nanoid(), name: FILTER_TITLE.ALL_TIME_TOP, icon: <Crown /> },
]

export const PLATFORMS = [
  { key: nanoid(), name: FILTER_TITLE.PC, icon: <Windows /> },
  { key: nanoid(), name: FILTER_TITLE.PS, icon: <PlayStation /> },
  { key: nanoid(), name: FILTER_TITLE.XBOX, icon: <Xbox /> },
  { key: nanoid(), name: FILTER_TITLE.NINTENDO, icon: <Nintendo /> },
  { key: nanoid(), name: FILTER_TITLE.IOS, icon: <Apple /> },
  { key: nanoid(), name: FILTER_TITLE.ANDROID, icon: <Android /> },
]

export const GENRES = [
  { key: nanoid(), name: FILTER_TITLE.ACTION, icon: <Action /> },
  { key: nanoid(), name: FILTER_TITLE.STRATEGY, icon: <Strategy /> },
  { key: nanoid(), name: FILTER_TITLE.RPG, icon: <RPG /> },
  { key: nanoid(), name: FILTER_TITLE.SHOOTER, icon: <Shooter /> },
  { key: nanoid(), name: FILTER_TITLE.ADVENTURE, icon: <Adventure /> },
  { key: nanoid(), name: FILTER_TITLE.PUZZLE, icon: <Puzzle /> },
  { key: nanoid(), name: FILTER_TITLE.RACING, icon: <Racing /> },
  { key: nanoid(), name: FILTER_TITLE.SPORTS, icon: <Sports /> },
]

export enum PATHS {
  home = '/',
  games = '/games',
  game = '/games/game',
  addGame = '/add-game',
}

export const gameSpecification = {
  id: -1,
  slug: '',
  name: '',
  price: 0,
  isInCart: false,
  ratings_count: 0,
  description_raw: '',
  website: '',
  released: '',
  background_image: '',
  developers: [{ name: '' }],
  publishers: [{ name: '' }],
  parent_platforms: [{ platform: { id: 0, slug: '', name: '' } }],
  platforms: [{ platform: { id: 0, slug: '', name: '' } }],
  genres: [{ name: '' }],
  short_screenshots: [{ id: 0, image: '' }],
}
