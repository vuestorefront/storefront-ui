export interface VsfRatingButtonProps {
  size?: VsfRatingButtonSize;
  max?: number;
  disabled?: boolean;
  value?: number;
  ariaLabel?: string;
  name?: string;
}

export enum VsfRatingButtonSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
