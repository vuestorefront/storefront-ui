import type { HTMLAttributes, MouseEvent, AriaAttributes } from 'react';

export interface VsfOverlayProps extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  absolute?: boolean;
  onClick?: (e: MouseEvent) => void;
}
