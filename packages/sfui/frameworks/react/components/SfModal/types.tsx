import { SfDrawerPlacement } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfModalProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { SfDrawerPlacement };
