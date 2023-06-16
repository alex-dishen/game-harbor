import { OptionsT } from '../SelectionModal/types';

export type OptionsListProps = {
  value: OptionsT[];
  reverse?: boolean;
  alignToStart?: boolean;
  onClick: (value: OptionsT, reverse?: boolean) => void;
};
