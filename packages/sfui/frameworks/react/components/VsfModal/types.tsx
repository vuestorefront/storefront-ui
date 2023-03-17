import { VsfDrawerPlacement } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfModalProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { VsfDrawerPlacement };
