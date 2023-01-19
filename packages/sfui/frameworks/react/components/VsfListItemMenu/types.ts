import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithTag, PropsWithStyle } from '../../shared/types';

export enum VsfListItemMenuSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps extends PropsWithChildren, PropsWithTag, PropsWithStyle {
  label?: string;
  size?: `${VsfListItemMenuSize}`;
  counter?: number;
  link?: string;
  secondaryText?: string;
  disabled?: boolean;
  selected?: boolean;
  selectedBackground?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  slotSecondaryText?: ReactNode;
  truncate?: boolean;
  role?: string;
  onClick?: (selected: boolean) => void;
}
