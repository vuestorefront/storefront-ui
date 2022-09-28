import type { HTMLAttributes, ReactNode, ElementType } from 'react';

export enum VsfButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum VsfButtonColors {
  primary = 'primary',
  secondary = 'secondary',
  gray = 'gray',
  positive = 'positive',
  negative = 'negative',
  warning = 'warning',
}

export enum VsfButtonVariants {
  contained = 'contained',
  outlined = 'outlined',
  plain = 'plain',
}

export type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;
export type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;
export type VsfButtonColorsKeys = keyof typeof VsfButtonColors;

type VsfButtonType =
  | ({ tag: 'button' } & HTMLAttributes<HTMLButtonElement>)
  | ({ tag?: 'a'; href: string } & HTMLAttributes<HTMLAnchorElement>)
  | never;

export type VsfButtonProps = {
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: VsfButtonSizesKeys;
  variant?: VsfButtonVariantsKeys;
  color?: VsfButtonColorsKeys;
  rounded?: boolean;
  disabled?: boolean;
  tile?: boolean;
  icon?: boolean;
  tag?: ElementType;
  href?: string;
  block?: boolean;
  onClick?: (e: MouseEvent) => void;
};
