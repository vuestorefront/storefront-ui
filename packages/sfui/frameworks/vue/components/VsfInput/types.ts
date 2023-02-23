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

export interface VsfInputProps {
  value: string;
  size?: VsfInputSize;
  type?: VsfInputRole;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  characterLimit?: number;
  readonly?: boolean;
  placeholder?: string;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
}
