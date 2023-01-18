import type { ChangeEvent } from 'react';
import type { PropsWithStyle, PropsWithTag } from '../../shared/types';

export enum VsfCheckboxAlignment {
  leading = 'leading',
  trailing = 'trailing',
}

export interface VsfCheckboxProps extends PropsWithStyle {
  required?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  alignment?: `${VsfCheckboxAlignment}`;
  invalid?: boolean;
  label?: string;
  value?: string;
  name?: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  labelTag?: PropsWithTag['tag'];
  role?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
