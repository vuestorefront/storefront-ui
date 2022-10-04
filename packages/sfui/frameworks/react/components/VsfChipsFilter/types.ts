import { ReactNode } from 'react';

export enum VsfChipsFilterVariants {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfChipsFilterProps {
  size?: VsfChipsFilterVariants;
  type?: 'checkbox' | 'radio';
  children?: ReactNode;
  name: string;
  label?: string;
  disabled?: boolean;
  noThumb?: boolean;
  onChange: (...args: any[]) => void;
  value?: any;
  className?: string;
  checked?: boolean;
}
