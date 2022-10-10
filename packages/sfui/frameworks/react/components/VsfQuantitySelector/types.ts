import type { ReactNode } from 'react';

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
  onChange: (value: number) => void;
  block?: boolean;
  className?: string;
  children?: ReactNode;
};
