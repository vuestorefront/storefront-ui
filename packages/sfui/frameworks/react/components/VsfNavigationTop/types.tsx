import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfNavigationTopVariant {
  none = 'none',
  auto = 'auto',
  'half-3' = 'half-3',
  '3-half' = '3-half',
}

export interface VsfNavigationTopProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  variant?: `${VsfNavigationTopVariant}`;
  slotButtonClose?: ReactNode;
  onOpenChange?: (value: boolean) => void;
}
