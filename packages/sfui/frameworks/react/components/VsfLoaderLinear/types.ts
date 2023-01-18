import { VsfLoaderSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfLoaderLinearSize {
  'minimal' = 'minimal',
}
export { VsfLoaderSize };
export interface VsfLoaderLinearProps extends PropsWithStyle {
  size?: `${VsfLoaderSize}` | `${VsfLoaderLinearSize}`;
  screenReaderText?: string;
}
