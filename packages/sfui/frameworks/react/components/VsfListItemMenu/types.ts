import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfListItemMenuSize } from '@storefront-ui/shared';

export { VsfListItemMenuSize };
export interface VsfListItemMenuProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfListItemMenuSize}`;
  disabled?: boolean;
  active?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
}
