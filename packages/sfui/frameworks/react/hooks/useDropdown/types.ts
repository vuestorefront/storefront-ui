import type { Prettify } from '@storefront-ui/shared';
import type { UsePopoverOptions } from '../usePopover';

export type UseDropdownOptions = Prettify<
  UsePopoverOptions & {
    onClose: (event: KeyboardEvent) => void;
    onCloseDeps?: unknown[];
  }
>;
