import type { ReactNode, SyntheticEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfAccordionItemProps extends PropsWithChildren, PropsWithStyle {
  open?: boolean;
  title?: string;
  chevronLeft?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onToggle?: (e: SyntheticEvent) => void;
}
