import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfInputSize } from '@storefront-ui/shared';

export { SfInputSize };

export type SfInputProps = Omit<QwikIntrinsicElements['input'], 'size' | 'class' | 'value' | 'children'> & {
  class?: string;
  size?: `${SfInputSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
  ref?: Signal<Element | undefined>;
  value?: Signal<any>;
};
