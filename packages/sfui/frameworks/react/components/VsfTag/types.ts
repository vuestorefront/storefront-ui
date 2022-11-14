import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types/index';

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

export enum VsfTagAriaLiveValues {
  off = 'off',
  polite = 'polite',
  assertive = 'assertive',
}

export interface VsfTagProps extends PropsWithChildren, PropsWithStyle {
  label?: string;
  variant?: VsfTagVariants;
  size?: VsfTagSizes;
  strong?: boolean;
  ariaLive?: VsfTagAriaLiveValues;
}
