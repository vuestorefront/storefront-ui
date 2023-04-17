import { SfCounterSize } from '@storefront-ui/shared';

export { SfCounterSize };

export type SfCounterProps = {
  size?: `${SfCounterSize}`;
  pill?: boolean;
  class?: string;
};
