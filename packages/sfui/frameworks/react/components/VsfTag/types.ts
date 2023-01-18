import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types/index';

export enum VsfTagVariant {
  primary = 'primary',
  secondary = 'secondary',
  negative = 'negative',
  warning = 'warning',
  gray = 'gray',
}

export enum VsfTagSize {
  sm = 'sm',
  base = 'base',
}

export enum VsfTagAriaLiveValue {
  off = 'off',
  polite = 'polite',
  assertive = 'assertive',
}

export interface VsfTagProps extends PropsWithChildren, PropsWithStyle {
  label?: string;
  variant?: `${VsfTagVariant}`;
  size?: `${VsfTagSize}`;
  strong?: boolean;
  ariaLive?: `${VsfTagAriaLiveValue}`;
}
