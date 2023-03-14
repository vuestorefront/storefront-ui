import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfListItemMenuSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfListItemMenuSize}`;
  disabled?: boolean;
  active?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
}
