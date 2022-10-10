import type { CSSProperties, MouseEventHandler, ReactNode, ElementType } from 'react';

export type VsfNavbarBottomProps = {
  absolute?: boolean;
  hideLabels?: boolean;
  filled?: boolean; // colored background
  className?: string | undefined;
  style?: CSSProperties;
  children?: ReactNode;
};

export type VsfNavbarBottomItemProps = {
  label: string;
  slotIcon: ReactNode;
  active?: boolean;
  className?: string | undefined;
  style?: CSSProperties;
  ariaLabel?: string;
  // VsfButton shared props
  link?: string;
  onClick?: MouseEventHandler;
  tag?: ElementType;
};
