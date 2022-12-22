import type { PropsWithChildren } from 'react';

export interface VsfDialogProps extends PropsWithChildren, PropsWithChildren {
  open?: boolean;
  hideCloseButton?: boolean;
  className?: string;
  onClose?: (isClosed: boolean) => void;
}
