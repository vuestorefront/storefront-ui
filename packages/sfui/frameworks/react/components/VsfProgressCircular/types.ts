import { VsfProgressSize } from '@storefront-ui/shared';
import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export { VsfProgressSize };
export interface VsfProgressCircularProps extends PropsWithStyle, PropsWithChildren {
  value?: number;
  size?: `${VsfProgressSize}`;
  ariaLabel?: string;
}
