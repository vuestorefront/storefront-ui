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
  id: string;
  name?: string;
  label?: string;
  value?: string;
  alignment?: VsfRadioAlignments;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export interface VsfRadioGroupProps extends PropsWithChildren, PropsWithStyle {
  id: string;
  legend?: string;
  direction?: VsfRadioGroupDirections;
  required?: boolean;
  invalid?: boolean;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
}
