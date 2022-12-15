import { ChangeEvent } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfCheckboxAlignments {
  leading = 'leading',
  trailing = 'trailing',
}

export interface VsfCheckboxProps extends PropsWithStyle {
  required?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  alignment?: VsfCheckboxAlignments;
  invalid?: boolean;
  label?: string;
  value?: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}
