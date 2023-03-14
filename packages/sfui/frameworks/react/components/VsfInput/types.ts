import type { InputHTMLAttributes, ReactNode } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfInputSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
export interface VsfInputProps extends PropsWithStyle, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: `${VsfInputSize}`;
  invalid?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  wrapperClassName?: string;
}
