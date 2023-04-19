import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';
import { SfLinkVariant } from '@storefront-ui/shared';

export { SfLinkVariant };

export type SfLinkProps = QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element |undefined>
  class?: string;
  variant?: `${SfLinkVariant}`;
}
