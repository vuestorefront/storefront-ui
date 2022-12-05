export enum VsfListItemMenuSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfTagProps {
  label?: string;
  size?: string;
  counter?: number;
  secondaryText?: string;
  disabled?: boolean;
  selected?: boolean;
}
