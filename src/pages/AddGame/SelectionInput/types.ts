import { ReactNode } from 'react';
import { OptionsT } from 'pages/AddGame/SelectionModule/types';

export type SelectionProps = {
  type: string;
  title: string;
  description: string;
  emoji: string;
  placeholder: string;
  icon?: ReactNode;
  isRequired?: boolean;
  inputDescription?: string;
  inputPlaceholder?: string;
  options?: OptionsT[];
};
