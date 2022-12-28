import type { VsfLoaderSizes } from '@sfui/shared/types';
import type { PropsWithStyle } from '../../shared/types';

export type VsfLoaderCircularProps = PropsWithStyle & {
  size?: VsfLoaderSizes;
  screenReaderText?: string;
};
