import type { AriaAttributes } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfProgressCircularSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}

export interface VsfProgressCircularProps
  extends PropsWithStyle,
    Pick<AriaAttributes, 'aria-valuemax' | 'aria-valuenow' | 'aria-valuemin'> {
  size?: `${VsfProgressCircularSize}`;
  value?: number;
  withValue?: boolean;
}
