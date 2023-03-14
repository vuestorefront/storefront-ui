import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfDialogProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  hideCloseButton?: boolean;
  outsideClickClose?: boolean;
  onClose?: (isClosed: boolean) => void;
}
