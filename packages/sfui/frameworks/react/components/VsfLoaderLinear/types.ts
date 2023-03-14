import { VsfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export enum VsfLoaderLinearSize {
  minimal = 'minimal',
}
export { VsfLoaderSize };
export interface VsfLoaderLinearProps extends PropsWithStyle {
  size?: `${VsfLoaderSize | VsfLoaderLinearSize}`;
  ariaLabel?: string;
}
