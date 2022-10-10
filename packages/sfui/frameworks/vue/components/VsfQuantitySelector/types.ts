export enum VsfQuantitySelectorSizes {
  base = 'base',
  lg = 'lg',
}

export type VsfQuantitySelectorProps = {
  value: number;
  inputId?: string;
  inputAriaLabel?: string;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  step?: number;
  size?: VsfQuantitySelectorSizes;
  block?: boolean;
};
