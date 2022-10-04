export enum VsfChipsFilterVariants {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfChipsFilterProps {
  size?: VsfChipsFilterVariants;
  type?: 'checkbox' | 'radio';
  name: string;
  label?: string;
  disabled?: boolean;
  noThumb?: boolean;
  onChange: (...args: any[]) => void;
  value?: any;
  checked?: boolean;
}
