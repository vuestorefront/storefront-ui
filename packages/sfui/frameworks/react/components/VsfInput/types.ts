import type { PropsWithChildren, ReactNode, ChangeEvent } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfInputProps extends PropsWithStyle, PropsWithChildren {
  value: string;
  size?: `${VsfInputSize}`;
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
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
