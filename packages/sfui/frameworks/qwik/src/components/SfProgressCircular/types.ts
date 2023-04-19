import { SfProgressSize } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export { SfProgressSize };
export type SfProgressCircularProps =  {
  class?: string;
  value?: number;
  size?: `${SfProgressSize}`;
  ariaLabel?: string;
}
