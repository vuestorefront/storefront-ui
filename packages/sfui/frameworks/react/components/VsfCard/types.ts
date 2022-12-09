import type { ReactNode } from 'react';

export enum VsfCardSizes {
  sm = 'sm',
  base = 'base',
}

export interface VsfCardProps {
  title: string;
  size?: VsfCardSizes;
  link?: string;
  imgSrc?: string;
  imgAttr?: Record<string, unknown>;
  description?: string;
  buttonText?: string;
  rounded?: boolean;
  onClick?: (event?: Event) => void;
  className?: string;
  slotImg?: ReactNode;
  [key: string]: unknown;
}
