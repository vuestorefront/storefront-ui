import { VsfDrawerPlacement } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfDrawerProps extends PropsWithStyle, PropsWithChildren {
  open: boolean;
  placement?: `${VsfDrawerPlacement}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { VsfDrawerPlacement };
