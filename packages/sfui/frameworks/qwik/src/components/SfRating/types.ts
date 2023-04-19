import type { PropsWithStyle } from '@storefront-ui/react';
import { SfRatingSize } from '@storefront-ui/shared';

export { SfRatingSize };
export type SfRatingProps = {
  class?: string;
  value?: number;
  max?: number;
  size?: `${SfRatingSize}`;
  halfIncrement?: boolean;
  ariaLabel?: string;
}
