import type { PropsWithStyle } from '../../shared/types';

export enum VsfRatingSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum VsfRatingVariant {
  base = 'base',
  withValue = 'withValue',
}

export interface VsfRatingProps extends PropsWithStyle {
  value?: number;
  max?: number;
  size?: `${VsfRatingSize}`;
  variant?: `${VsfRatingVariant}`;
  halfIncrement?: boolean;
}
