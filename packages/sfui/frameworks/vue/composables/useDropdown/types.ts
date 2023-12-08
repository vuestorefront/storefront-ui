import type { Prettify } from '@storefront-ui/shared';
import type { ReferenceElement } from '@floating-ui/vue';
import type { UsePopoverOptions } from '../usePopover';

export type UseDropdownOptions<ReferenceEl extends ReferenceElement = ReferenceElement> = Prettify<
  UsePopoverOptions<ReferenceEl> & {
    onClose: () => void;
  }
>;
