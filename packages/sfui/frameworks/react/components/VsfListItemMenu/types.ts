import type { ReactNode } from 'react';

export enum VsfListItemMenuSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps {
  label?: string;
  size?: string;
  counter?: string;
  link?: string;
  secondaryText?: string;
  disabled?: boolean;
  selected?: boolean;
  selectedBackground?: boolean;
  className?: string;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  truncate?: boolean;
  onClick?: (selected: boolean) => void;
}
