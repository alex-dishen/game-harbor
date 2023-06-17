import { ReactNode } from 'react';
import { OptionsT, TitleT } from 'pages/AddGame/SelectionModal/types';

export type SelectionProps = {
  type: string;
  title: TitleT;
  description: string;
  emoji: string;
  placeholder: string;
  icon?: ReactNode;
  isRequired?: boolean;
  inputDescription?: string;
  inputPlaceholder?: string;
  optionsList?: OptionsT[];
};
