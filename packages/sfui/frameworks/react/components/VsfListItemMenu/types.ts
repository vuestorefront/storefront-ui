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
  className?: string;
  slotSuffix?: ReactNode;
  slotPreffix?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}
