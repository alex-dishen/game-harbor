import { OptionsT } from '../SelectionModule/types';

export type OptionsListProps = {
  value: OptionsT[];
  reverse?: boolean;
  alignToStart?: boolean;
  onClick: (value: OptionsT, reverse?: boolean) => void;
};
