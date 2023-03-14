import type { ReactNode, SyntheticEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfAccordionItemSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfAccordionItemProps extends PropsWithChildren, PropsWithStyle {
  open?: boolean;
  title?: string;
  chevronLeft?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: VsfAccordionItemSize;
  onToggle?: (e: SyntheticEvent) => void;
}
