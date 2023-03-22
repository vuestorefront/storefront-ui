import { SfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export { SfLoaderSize };
export interface SfLoaderCircularProps extends PropsWithStyle {
  size?: `${SfLoaderSize}`;
  ariaLabel?: string;
}
