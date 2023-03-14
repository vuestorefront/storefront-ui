import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

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

export interface VsfButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithStyle,
    PropsWithChildren {
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: `${VsfButtonSize}`;
  variant?: `${VsfButtonVariant}`;
  square?: boolean;
}
