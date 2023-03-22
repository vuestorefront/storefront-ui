import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum SfCounterSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

export interface SfCounterProps extends PropsWithChildren, PropsWithStyle {
  size?: `${SfCounterSize}`;
  pill?: boolean;
}
