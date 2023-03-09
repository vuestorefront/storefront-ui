import type { PropsWithStyle } from '../../shared/types';

export enum VsfRatingSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export interface VsfRatingProps extends PropsWithStyle {
  value?: number;
  max?: number;
  size?: `${VsfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
