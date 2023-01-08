import { VsfLoaderSizes } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfLoaderSizes };
export type VsfLoaderCircularProps = PropsWithStyle & {
  size?: VsfLoaderSizes;
  screenReaderText?: string;
};
