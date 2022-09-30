import type { ReactNode, ElementType } from 'react';

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

export type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;
export type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;

export type VsfButtonProps = {
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: VsfButtonSizesKeys;
  variant?: VsfButtonVariantsKeys;
  rounded?: boolean;
  disabled?: boolean;
  tile?: boolean;
  icon?: boolean;
  tag?: ElementType;
  link?: string;
  block?: boolean;
  onClick?: (e: MouseEvent) => void;
};
