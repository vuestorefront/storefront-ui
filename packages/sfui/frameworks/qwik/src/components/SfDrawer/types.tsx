import { Signal } from '@builder.io/qwik';
import { SfDrawerPlacement } from '@storefront-ui/shared';

export type SfDrawerProps = {
  as?: any;
  ref?: Signal<Element |undefined>;
  open: boolean;
  class: string;
  placement?: `${SfDrawerPlacement}`;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose?: () => void;
};

export { SfDrawerPlacement };
