import { VsfProgressSize } from '@storefront-ui/shared';

export enum VsfProgressLinearSize {
  'minimal' = 'minimal',
}
export { VsfProgressSize };
export type VsfProgressLinearProps = {
  value?: number;
  size?: `${VsfProgressLinearSize | VsfProgressSize}`;
  ariaLabel?: string;
};
