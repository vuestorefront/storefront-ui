import type { PropsWithChildren, ReactNode, ChangeEvent, MouseEventHandler } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfInputRole {
  widget = 'widget',
  combobox = 'combobox',
}

export enum VsfInputAriaAutocomplete {
  none = 'none',
  both = 'both',
  list = 'list',
}
export interface VsfInputProps extends PropsWithStyle, PropsWithChildren {
  value: string;
  size?: `${VsfInputSize}`;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  characterLimit?: number;
  readonly?: boolean | undefined;
  placeholder?: string;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
  children?: ReactNode;
  role?: VsfInputRole;
  ariaAutocomplete?: VsfInputAriaAutocomplete;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
}
