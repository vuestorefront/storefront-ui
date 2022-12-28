import type { ReactNode } from 'react';
import type { VsfButtonProps } from '../VsfButton';

export enum VsfCardSizes {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}
type ButtonProps = Pick<VsfButtonProps<HTMLAnchorElement | HTMLButtonElement>, 'onClick'>;
export interface VsfCardProps extends ButtonProps {
  title: string;
  size?: VsfCardSizes;
  link?: string;
  imgSrc?: string;
  imgAttr?: Record<string, unknown>;
  description?: string;
  buttonText?: string;
  rounded?: boolean;
  className?: string;
  slotImg?: ReactNode;
  [key: string]: unknown;
}
