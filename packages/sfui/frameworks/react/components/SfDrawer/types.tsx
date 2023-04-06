import { SfDrawerPlacement, SfPopoverStrategy } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfDrawerProps extends PropsWithStyle, PropsWithChildren {
  open: boolean;
  placement?: `${SfDrawerPlacement}`;
  strategy?: `${SfPopoverStrategy}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
}
export { SfDrawerPlacement };
