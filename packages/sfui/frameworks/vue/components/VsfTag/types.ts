export enum VsfTagVariant {
  primary = 'primary',
  secondary = 'secondary',
  negative = 'negative',
  warning = 'warning',
  neutral = 'neutral',
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

export interface VsfTagProps {
  label?: string;
  size?: string;
  variant?: string;
  strong?: boolean;
  ariaLive?: VsfTagAriaLiveValue;
}
