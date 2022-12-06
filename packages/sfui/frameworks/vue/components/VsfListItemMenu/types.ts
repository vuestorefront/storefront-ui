export enum VsfListItemMenuSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfListItemMenuProps {
  label?: string;
  link?: string;
  size?: string;
  counter?: number;
  secondaryText?: string;
  disabled?: boolean;
  selected?: boolean;
}
