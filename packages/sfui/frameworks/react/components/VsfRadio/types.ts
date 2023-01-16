import type { ChangeEvent, PropsWithChildren } from 'react';
import { PropsWithStyle } from '../../shared/types';

export enum VsfRadioGroupDirections {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum VsfRadioAlignments {
  leading = 'leading',
  trailing = 'trailing',
}

export interface VsfRadioProps extends PropsWithStyle {
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  alignment?: VsfRadioAlignments;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface VsfRadioGroupProps extends PropsWithChildren, PropsWithStyle {
  legend?: string;
  direction?: VsfRadioGroupDirections;
  required?: boolean;
  invalid?: boolean;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
}
