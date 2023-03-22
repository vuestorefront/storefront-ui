import { SfProgressSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum SfProgressLinearSize {
  'minimal' = 'minimal',
}
export { SfProgressSize };
export interface SfProgressLinearProps extends PropsWithStyle {
  value?: number;
  size?: `${SfProgressLinearSize | SfProgressSize}`;
  ariaLabel?: string;
}
