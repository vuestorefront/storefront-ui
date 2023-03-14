import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfCounterSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

export interface VsfCounterProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfCounterSize}`;
  pill?: boolean;
}
