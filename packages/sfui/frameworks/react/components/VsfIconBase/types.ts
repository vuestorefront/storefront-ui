import { ReactNode } from 'react';

export interface VsfIconBaseProps {
  children?: ReactNode;
  size?: keyof typeof VsfIconSizeEnum;
  viewBox: string;
  className?: string;
  ariaLabel?: string;
}

export enum VsfIconSizeEnum {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
}
