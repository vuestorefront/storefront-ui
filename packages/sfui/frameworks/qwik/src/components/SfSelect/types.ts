import { SfSelectSize } from '@storefront-ui/shared';
import { QwikIntrinsicElements } from '@builder.io/qwik';

export { SfSelectSize };
export type SfSelectProps = Omit<QwikIntrinsicElements['select'], 'size' > & {
  class?: string;
  size?: `${SfSelectSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  showSlotChevron?: boolean;
};
