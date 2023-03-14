import { VsfProgressSize } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export { VsfProgressSize };
export interface VsfProgressCircularProps extends PropsWithStyle, PropsWithChildren {
  value?: number;
  size?: `${VsfProgressSize}`;
  ariaLabel?: string;
}
