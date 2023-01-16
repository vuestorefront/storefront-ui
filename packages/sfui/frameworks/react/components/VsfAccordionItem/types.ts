import type { ReactNode, SyntheticEvent } from 'react';

export interface VsfAccordionItemProps {
  open?: boolean;
  title?: string;
  chevronLeft?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onToggle?: (e: SyntheticEvent) => void;
  children?: ReactNode;
  className?: string;
}
