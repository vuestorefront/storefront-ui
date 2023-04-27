import type { PropsWithStyle } from '@storefront-ui/react';
import { SfRatingSize } from '@storefront-ui/shared';

export { SfRatingSize };
export interface SfRatingProps extends PropsWithStyle {
  value?: number;
  max?: number;
  size?: `${SfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
