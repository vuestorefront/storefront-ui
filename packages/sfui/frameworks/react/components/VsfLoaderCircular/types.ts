import { VsfLoaderSizes } from '@storefront-ui/shared/types';
import type { PropsWithStyle } from '../../shared/types';

export { VsfLoaderSizes };
export type VsfLoaderCircularProps = PropsWithStyle & {
  size?: VsfLoaderSizes;
  screenReaderText?: string;
};
