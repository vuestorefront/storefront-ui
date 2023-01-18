import type { ChangeEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfChipsFilterVariant {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfChipsFilterProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfChipsFilterVariant}`;
  type?: 'checkbox' | 'radio';
  name: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
