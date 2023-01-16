import type { ChangeEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfChipsFilterVariants {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfChipsFilterProps extends PropsWithChildren, PropsWithStyle {
  size?: VsfChipsFilterVariants;
  type?: 'checkbox' | 'radio';
  name: string;
  label?: string;
  disabled?: boolean;
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
}
