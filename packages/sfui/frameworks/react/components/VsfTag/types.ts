import { PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types/index';

export enum VsfTagVariants {
  primary = 'primary',
  secondary = 'secondary',
  negative = 'negative',
  warning = 'warning',
  gray = 'gray',
}

export enum VsfTagSizes {
  sm = 'sm',
  base = 'base',
}

export interface VsfTagProps extends PropsWithChildren, PropsWithStyle {
  label?: string;
  variant?: VsfTagVariants;
  size?: VsfTagSizes;
  strong?: boolean;
}
