import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfListItemSize } from '@storefront-ui/shared';

export { SfListItemSize };
export interface SfListItemProps extends PropsWithChildren, PropsWithStyle {
  size?: `${SfListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
}
