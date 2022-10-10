import type { MouseEventHandler, ReactNode, ElementType } from 'react';
import { PropsWithStyle } from '../../shared/types';

export type VsfNavbarBottomProps = PropsWithStyle & {
  absolute?: boolean;
  hideLabels?: boolean;
  filled?: boolean; // colored background
  children?: ReactNode;
};

export type VsfNavbarBottomItemProps = PropsWithStyle & {
  label: string;
  slotIcon: ReactNode;
  active?: boolean;
  ariaLabel?: string;
  // VsfButton shared props
  link?: string;
  onClick?: MouseEventHandler;
  tag?: ElementType;
};
