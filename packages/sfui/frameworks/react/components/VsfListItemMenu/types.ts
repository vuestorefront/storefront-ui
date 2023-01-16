import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithTag } from '../../shared/types';

export enum VsfListItemMenuSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps extends PropsWithChildren, PropsWithTag {
  label?: string;
  size?: string;
  counter?: number;
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
  onClick?: (selected: boolean) => void;
}
