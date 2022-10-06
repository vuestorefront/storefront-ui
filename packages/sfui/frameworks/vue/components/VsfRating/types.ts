export enum VsfRatingSizes {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export enum VsfRatingVariants {
  base = 'base',
  withValue = 'withValue',
}

export interface VsfRatingProps {
  value?: number;
  max?: number;
  size?: VsfRatingSizes;
  variant?: VsfRatingVariants;
  halfIncrement?: boolean;
}
