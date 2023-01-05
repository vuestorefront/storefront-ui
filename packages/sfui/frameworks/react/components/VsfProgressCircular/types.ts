import { AriaAttributes } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfProgressCircularSizes {
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
  size: VsfProgressCircularSizes;
  value?: number;
  withValue: boolean;
}
