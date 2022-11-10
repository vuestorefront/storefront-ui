import { PropsWithChildren, ReactNode } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';

export enum VsfSelectSizes {
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
  disabled?: boolean;
  selected?: string;
  label?: string;
  size?: VsfSelectSizes;
  required?: boolean;
  slotPlaceholder?: ReactNode;
  placeholder?: string;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
  invalid?: boolean;
  onChange: (value: string) => void;
}
