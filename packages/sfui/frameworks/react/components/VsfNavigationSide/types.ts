import type { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfNavigationSideProps extends PropsWithChildren, PropsWithStyle {
  open: boolean;
  overlayVisible?: boolean;
  leftSide?: boolean;
  permanent?: boolean;
  logoLink?: string;
  logoAriaLabel?: string;
  closeAriaLabel?: string;
  slotNavigation?: ReactNode;
  slotBanner?: ReactNode;
  onClick?: MouseEventHandler;
  onOpenChange?: (value: boolean) => void;
}
