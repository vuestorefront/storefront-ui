import type { ChangeEvent, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfChipSize {
  sm = 'sm',
  base = 'base',
}

export interface VsfChipProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfChipSize}`;
  label?: string;
  disabled?: boolean;
  onSelected: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  selected?: boolean;
  deletable?: boolean;
  slotPrefix: ReactNode;
}
