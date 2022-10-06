export enum VsfQuantitySelectorSizes {
  base = 'base',
  lg = 'lg',
}

export type VsfQuantitySelectorProps = {
  inputId?: string;
  inputAriaLabel?: string;
  value: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  step?: number;
  size?: VsfQuantitySelectorSizes;
  block?: boolean;
};
