import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfListItemSize } from '@storefront-ui/shared';

export { VsfListItemSize };
export interface VsfListItemProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
}
