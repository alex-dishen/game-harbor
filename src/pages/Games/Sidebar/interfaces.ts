import { MotionProps } from 'framer-motion';

export interface StyledSidebarProps extends MotionProps {
  isChangeSidebar: boolean;
}

export interface FilterProps {
  filterName: string;
  currentFilter: string;
}
