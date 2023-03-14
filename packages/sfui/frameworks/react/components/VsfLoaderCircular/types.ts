import { VsfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export { VsfLoaderSize };
export interface VsfLoaderCircularProps extends PropsWithStyle {
  size?: `${VsfLoaderSize}`;
  ariaLabel?: string;
}
