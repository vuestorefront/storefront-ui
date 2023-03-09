export enum VsfRatingSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export interface VsfRatingProps {
  value?: number;
  max?: number;
  size?: VsfRatingSize;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
