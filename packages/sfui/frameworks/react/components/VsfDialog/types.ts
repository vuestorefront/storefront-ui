import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfDialogProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  hideCloseButton?: boolean;
  outsideClickClose?: boolean;
  ariaLabelCloseButton?: string;
  onClose?: (isClosed: boolean) => void;
}
