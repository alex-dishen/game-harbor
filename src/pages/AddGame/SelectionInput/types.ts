import { ReactNode } from 'react';
import { OptionsT } from 'types';
import { TitleT } from 'pages/AddGame/types';

export type SelectionProps = {
  type: string;
  title: TitleT | string;
  description: string;
  emoji: string;
  placeholder: string;
  icon?: ReactNode;
  isRequired?: boolean;
  inputDescription?: string;
  inputPlaceholder?: string;
  optionsList?: OptionsT[];
};
