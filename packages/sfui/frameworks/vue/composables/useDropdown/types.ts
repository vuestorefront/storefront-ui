import type { Prettify } from '@storefront-ui/shared';
import type { ReferenceElement } from '@floating-ui/vue';
import type { UsePopoverOptions } from '../usePopover';

export type UseDropdownOptions<T extends ReferenceElement = ReferenceElement> = Prettify<
  UsePopoverOptions<T> & {
    onClose: () => void;
  }
>;
