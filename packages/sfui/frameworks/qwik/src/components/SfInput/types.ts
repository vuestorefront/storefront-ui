import { PropFunction, QwikChangeEvent, QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfInputSize } from '@storefront-ui/shared';

export { SfInputSize };

export type SfInputProps = Omit<QwikIntrinsicElements['input'], 'size' | 'class'  | 'children' | 'change'> & {
  class?: string;
  size?: `${SfInputSize}`;
  invalid?: boolean;
  wrapperClass?: string;
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
  ref?: Signal<Element | undefined>;
  onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
