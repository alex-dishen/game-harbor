import { MotionProps } from 'framer-motion';
import { IGame } from 'api/interfaces';

export interface IStyledGamePage extends MotionProps {
  GAMES: IGame[] | undefined;
}

export interface IOverflow {
  isHideSidebar: boolean;
}
