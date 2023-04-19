import { SfLoaderSize } from '@storefront-ui/shared';

export enum SfLoaderLinearSize {
  minimal = 'minimal',
}

export type SfLoaderLinearProps = {
  class?: string;
  size?: `${SfLoaderSize | SfLoaderLinearSize}`;
  ariaLabel?: string;
};
