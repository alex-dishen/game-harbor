import { RefObject } from 'react';

export type OptionsT = {
  key: string;
  name: string;
  icon: JSX.Element;
};

export type SelectionModuleProps = {
  title: string;
  emoji: string;
  popupRef: RefObject<HTMLDivElement>;
  description?: string;
  placeholder?: string;
  options: OptionsT[];
};
