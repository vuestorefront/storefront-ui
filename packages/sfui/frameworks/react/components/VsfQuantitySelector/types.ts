import type { ReactNode, PropsWithChildren } from 'react';

export enum VsfQuantitySelectorSizes {
  sm = 'sm',
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
  stockText?: string;
  emptyStockText?: string;
  onChange?: (value: number) => void;
  block?: boolean;
  slotDescription?: ReactNode;
  className?: string;
} & PropsWithChildren;
