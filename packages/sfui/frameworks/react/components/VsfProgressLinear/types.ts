import type { PropsWithStyle } from '../../shared/types';

export enum VsfProgressLinearSizes {
  'minimal' = 'minimal',
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

export interface VsfProgressLinearProps extends PropsWithStyle {
  size: VsfProgressLinearSizes;
  value?: number;
  withValue: boolean;
}
