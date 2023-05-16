import { MotionProps } from 'framer-motion';
import { IGame } from 'api/interfaces';

export type StyledGamePageTypes = MotionProps & {
  GAMES: IGame[] | undefined;
};

export type OverflowTypes = {
  isHideSidebar: boolean;
};
