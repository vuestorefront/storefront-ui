import { PropsWithChildren } from 'react';

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

export interface VsfTagProps extends PropsWithChildren {
  label?: string;
  variant?: VsfTagVariants;
  size?: VsfTagSizes;
  strong?: boolean;
}
