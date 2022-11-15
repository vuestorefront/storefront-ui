import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfQuantitySelectorSizes {
  base = 'base',
  lg = 'lg',
}

export type VsfQuantitySelectorProps = PropsWithStyle &
  PropsWithChildren & {
    value: number;
    inputId?: string;
    inputAriaLabel?: string;
    minValue?: number;
    maxValue?: number;
    disabled?: boolean;
    step?: number;
    size?: VsfQuantitySelectorSizes;
    block?: boolean;
    decimal?: number;
    onChange: (value: number) => void;
  };
