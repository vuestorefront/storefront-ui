import { VsfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfLoaderSize };
export interface VsfLoaderCircularProps extends PropsWithStyle {
  size?: `${VsfLoaderSize}`;
  ariaLabel?: string;
}
