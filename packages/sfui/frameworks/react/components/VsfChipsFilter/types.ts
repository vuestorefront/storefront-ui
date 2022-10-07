import { ReactNode, ChangeEvent } from 'react';

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
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  checked?: boolean;
}
