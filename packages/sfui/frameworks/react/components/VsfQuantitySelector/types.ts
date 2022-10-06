import type { ReactNode } from 'react';

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
  onChange?: (value: number) => void;
  block?: boolean;
  className?: string;
  children?: ReactNode;
};
