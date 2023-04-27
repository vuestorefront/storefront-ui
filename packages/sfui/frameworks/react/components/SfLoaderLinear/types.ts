import { SfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum SfLoaderLinearSize {
  minimal = 'minimal',
}
export { SfLoaderSize };
export interface SfLoaderLinearProps extends PropsWithStyle {
  size?: `${SfLoaderSize | SfLoaderLinearSize}`;
  ariaLabel?: string;
}
