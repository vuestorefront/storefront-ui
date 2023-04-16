
import { SfIconSize } from '@storefront-ui/shared';
import { QwikIntrinsicElements } from '@builder.io/qwik';

export type SfIconBaseProps = QwikIntrinsicElements['svg'] &{
  size?: `${SfIconSize}`;
}

export { SfIconSize };
