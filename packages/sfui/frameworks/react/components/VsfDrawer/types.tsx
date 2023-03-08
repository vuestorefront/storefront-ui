import { VsfDrawerPlacement } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfDrawerProps extends PropsWithStyle, PropsWithChildren {
  open: boolean;
  placement?: `${VsfDrawerPlacement}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: (value: boolean) => void;
}
export { VsfDrawerPlacement };
