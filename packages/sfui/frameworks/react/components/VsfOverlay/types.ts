import type { MouseEvent, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfOverlayProps extends PropsWithChildren, PropsWithStyle {
  visible?: boolean;
  absolute?: boolean;
  onClick?: (e: MouseEvent) => void;
}
