import type { ReactNode, MouseEventHandler } from 'react';

export enum VsfButtonSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type VsfButtonProps<E extends HTMLAnchorElement | HTMLButtonElement> = {
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: `${VsfButtonSize}`;
  variant?: `${VsfButtonVariant}`;
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
