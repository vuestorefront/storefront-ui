import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfCounterSize } from '@storefront-ui/shared';

export { SfCounterSize };
export interface SfCounterProps extends PropsWithChildren, PropsWithStyle {
  size?: `${SfCounterSize}`;
  pill?: boolean;
}
