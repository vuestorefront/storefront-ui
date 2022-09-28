import type { HTMLAttributes, ReactNode, ElementType } from 'react';

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
  circle?: boolean;
  disabled?: boolean;
  tile?: boolean;
  icon?: boolean;
  tag?: ElementType;
  href?: string;
  onClick?: MouseEvent;
};
