export enum VsfRatingSizeEnum {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum VsfRatingVariantEnum {
  base = 'base',
  withValue = 'withValue',
}

export type VsfRatingSizeKeys = keyof typeof VsfRatingSizeEnum;
export type VsfRatingVariantKeys = keyof typeof VsfRatingVariantEnum;

export interface VsfRatingProps {
  value?: number;
  max?: number;
  size?: VsfRatingSizeKeys;
  variant?: VsfRatingVariantKeys;
  halfIncrement?: boolean;
  className?: string;
}
