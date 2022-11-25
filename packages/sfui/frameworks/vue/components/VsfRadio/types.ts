export enum VsfRadioGroupDirections {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export type VsfRadioProps = {
  id: string;
  label?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  invalid?: boolean;
};

export type VsfRadioGroupProps = {
  id: string;
  legend?: string;
  direction?: VsfRadioGroupDirections;
  required?: boolean;
  errorText?: string;
  helperText?: string;
  requiredText?: string;
};
