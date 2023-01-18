import type { ReactNode } from 'react';
import type { VsfButtonProps } from '../VsfButton';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfCardSize {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}
type ButtonProps = Pick<VsfButtonProps<HTMLAnchorElement | HTMLButtonElement>, 'onClick'>;
export interface VsfCardProps extends ButtonProps, PropsWithStyle {
  title: string;
  size?: `${VsfCardSize}`;
  link?: string;
  imgSrc?: string;
  imgAttr?: Record<string, unknown>;
  description?: string;
  buttonText?: string;
  rounded?: boolean;
  slotImg?: ReactNode;
  [key: string]: unknown;
}
