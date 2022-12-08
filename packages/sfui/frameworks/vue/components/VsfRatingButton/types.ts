export interface VsfRatingButtonProps {
  size?: VsfRatingButtonSizes;
  max?: number;
  disabled?: boolean;
  value?: number;
  ariaLabel?: string;
  name?: string;
}

export enum VsfRatingButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
