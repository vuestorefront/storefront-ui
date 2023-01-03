import type { PropsWithChildren } from 'react';

export interface VsfDialogProps extends PropsWithChildren, PropsWithChildren {
  open?: boolean;
  hideCloseButton?: boolean;
  outsideClickClose?: boolean;
  className?: string;
  onClose?: (isClosed: boolean) => void;
}
