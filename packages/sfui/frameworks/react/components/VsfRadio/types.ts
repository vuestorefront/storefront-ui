import type { ChangeEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfRadioGroupDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum VsfRadioAlignment {
  leading = 'leading',
  trailing = 'trailing',
}

export interface VsfRadioProps extends PropsWithStyle {
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  alignment?: `${VsfRadioAlignment}`;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface VsfRadioGroupProps extends PropsWithChildren, PropsWithStyle {
  legend?: string;
  direction?: `${VsfRadioGroupDirection}`;
  required?: boolean;
  invalid?: boolean;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
}
