import { VsfProgressSize } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfProgressLinearSize {
  'minimal' = 'minimal',
}
export { VsfProgressSize };
export interface VsfProgressLinearProps extends PropsWithStyle {
  value?: number;
  size?: `${VsfProgressLinearSize | VsfProgressSize}`;
  ariaLabel?: string;
}
