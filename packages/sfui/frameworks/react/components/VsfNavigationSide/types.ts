import type { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

export interface VsfNavigationSideProps extends PropsWithChildren {
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
