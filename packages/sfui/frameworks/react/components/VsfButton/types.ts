import type { ReactNode, MouseEventHandler } from 'react';

export enum VsfButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type VsfButtonProps<E extends HTMLAnchorElement | HTMLButtonElement> = {
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: VsfButtonSizes;
  variant?: VsfButtonVariants;
  rounded?: boolean;
  disabled?: boolean;
  greyscale?: boolean;
  truncate?: boolean;
  tile?: boolean;
  block?: boolean;
  className?: string;
  onClick?: MouseEventHandler<E>;
} & (E extends HTMLAnchorElement
  ? { link: string; type?: never }
  : { link?: never; type?: 'button' | 'submit' | 'reset' });
