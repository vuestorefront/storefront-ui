import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfRatingSize } from '@storefront-ui/shared';

export { VsfRatingSize };
export interface VsfRatingProps extends PropsWithStyle {
  value?: number;
  max?: number;
  size?: `${VsfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
