import type { PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfSelectSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfSelectDefaultProps extends PropsWithChildren, PropsWithStyle {}

export interface VsfSelectOptionProps extends VsfSelectDefaultProps {
  value: string;
  ariaSelected?: boolean;
}

export interface VsfSelectProps extends VsfSelectDefaultProps {
  options: string[];
  disabled?: boolean;
  selected?: string;
  label?: string;
  size?: `${VsfSelectSize}`;
  required?: boolean;
  slotPlaceholder?: ReactNode;
  placeholder?: string;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
  invalid?: boolean;
  onChange: (value: string) => void;
}
