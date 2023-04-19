import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfListItemSize } from '@storefront-ui/shared';
import { Signal } from '@builder.io/qwik';

export { SfListItemSize };
export type SfListItemProps = {
  as?: any;
  ref?: Signal<Element |undefined>
  class?: string;
  size?: `${SfListItemSize}`;
  disabled?: boolean;
  selected?: boolean;
  slotSuffix?: ReactNode;
  slotPrefix?: ReactNode;
  role?: string;
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
};
