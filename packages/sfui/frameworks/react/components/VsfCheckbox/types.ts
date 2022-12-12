import type { ChangeEvent } from 'react';

export enum VsfCheckboxAlignments {
  leading = 'leading',
  trailing = 'trailing',
}

export interface VsfCheckboxProps {
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
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
