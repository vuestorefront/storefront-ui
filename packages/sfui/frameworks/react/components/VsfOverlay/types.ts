import type { MouseEvent, ReactNode } from 'react';

export interface VsfOverlayProps {
  visible?: boolean;
  absolute?: boolean;
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;
  className?: string;
}
