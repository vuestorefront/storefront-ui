import { SfChipSize } from '@storefront-ui/shared';
import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export { SfChipSize };

export type SfChipProps = {
  ref?: Signal<Element |undefined>,
  class?: string;
  size?: `${SfChipSize}`;
  square?: boolean;
  inputProps?: QwikIntrinsicElements['input'];
  showSlotPrefix?: boolean;
  showSlotSuffix?: boolean;
}
