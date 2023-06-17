import { RefObject } from 'react';

export type OptionsT = {
  key: string;
  name: string;
  icon?: JSX.Element;
};

export type SelectionModuleProps = {
  title: TitleT;
  emoji: string;
  popupRef: RefObject<HTMLDivElement>;
  description?: string;
  placeholder?: string;
  optionsList: OptionsT[];
};

export type PlatformsAndGenres = 'Platforms' | 'Genres';

export type PublishersAndDevelopers = 'Publishers' | 'Developers';

export type TitleT = PlatformsAndGenres | PublishersAndDevelopers;
