import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfQuantitySelectorSize {
  base = 'base',
  lg = 'lg',
}

export type VsfQuantitySelectorProps = PropsWithStyle &
  PropsWithChildren & {
    value: number;
    inputId?: string;
    minValue?: number;
    maxValue?: number;
    disabled?: boolean;
    step?: number;
    size?: `${VsfQuantitySelectorSize}`;
    block?: boolean;
    decimal?: number;
    ariaLabelInput?: string;
    ariaLabelDecrease?: string;
    ariaLabelIncrease?: string;
    onChange: (value: number) => void;
  };
