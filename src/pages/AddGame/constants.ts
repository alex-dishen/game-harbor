import { PLATFORMS, GENRES } from '../../constants'

export const GameDetails = [
  {
    title: 'Platforms',
    isRequired: true,
    placeholder: 'Add platform',
    emoji: '🎮',
    description: 'Where can users play this game?',
    inputDescription:
      'Platforms are devices or operating systems that the game was released for.',
    inputPlaceholder: 'Choose platform',
    optionsList: PLATFORMS,
  },
  {
    title: 'Genres',
    isRequired: true,
    placeholder: 'Add genre',
    emoji: '💭',
    description: 'Is it Strategy or Shooter?',
    inputDescription:
      'Genres are a means to classify games, mostly by their distinct features of gameplay.',
    inputPlaceholder: 'Choose genre',
    optionsList: GENRES,
  },
  {
    title: 'Publishers',
    placeholder: 'Add publisher',
    emoji: '🧑🏻‍💻',
    description: 'Who did publish the game?',
    inputDescription:
      'Publishers are companies that advertise and sell games. One game may have several publishers.',
    inputPlaceholder: 'Specify publishers',
  },
  {
    title: 'Developers',
    isRequired: true,
    placeholder: 'Add developer',
    emoji: '🚀',
    description: 'Who is the developer?',
    inputDescription:
      'Developers are companies that design and program games. One game may have several developers.',
    inputPlaceholder: 'Specify developers',
  },
]
