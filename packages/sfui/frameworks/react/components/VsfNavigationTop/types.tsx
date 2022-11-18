import type { ReactNode } from 'react';

export enum VsfNavigationTopVariant {
  none = 'none',
  auto = 'auto',
  'half-3' = 'half-3',
  '3-half' = '3-half',
}

export type VsfNavigationTopProps = {
  open?: boolean;
  variant?: VsfNavigationTopVariant;
  onOpenChange?: (value: boolean) => void;
  children?: ReactNode;
};
