import type { ChangeEventHandler, ReactNode } from 'react';

export enum VsfQuantitySelectorSizes {
  base = 'base',
  lg = 'lg',
}

type VsfQuantitySelectorSizesKeys = keyof typeof VsfQuantitySelectorSizes;

export interface VsfQuantitySelectorProps {
  value?: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  step?: number;
  size?: VsfQuantitySelectorSizesKeys;
  ariaLabel?: string;
  stockText?: string;
  emptyStockText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  block?: boolean;
  slotDescription?: ReactNode;
}
