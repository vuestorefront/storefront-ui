import type { ReactNode, PropsWithChildren } from 'react';

export enum VsfListItemMenuSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps extends PropsWithChildren {
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
  slotSecondaryText?: ReactNode;
  truncate?: boolean;
  tag?: 'li';
  onClick?: (selected: boolean) => void;
}
