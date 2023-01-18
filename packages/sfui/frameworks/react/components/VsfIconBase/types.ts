import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfIconSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

export interface VsfIconBaseProps extends PropsWithStyle, PropsWithChildren {
  size?: `${VsfIconSize}`;
  viewBox: string;
  ariaLabel?: string;
}
