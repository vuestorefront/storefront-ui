import type { InputHTMLAttributes, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfChipSize {
  sm = 'sm',
  base = 'base',
}

export interface VsfChipProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfChipSize}`;
  square?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
