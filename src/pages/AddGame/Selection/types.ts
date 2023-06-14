import { ReactNode } from 'react';

export type SelectionProps = {
  type: string;
  title: string;
  description: string;
  emoji: string;
  placeholder: string;
  icon?: ReactNode;
  isRequired?: boolean;
};
