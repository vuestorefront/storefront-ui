import { ReactNode, ChangeEvent } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfInputSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfInputProps extends PropsWithStyle {
  value: string;
  size?: VsfInputSizes;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  characterLimit?: number;
  readonly?: boolean | undefined;
  placeholder?: string;
  errorMessage?: string;
  helpText?: string;
  requiredText?: string;
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
