import type { Prettify, UsePopoverOptions } from '@storefront-ui/react';

export type UseDropdownOptions = Prettify<
  UsePopoverOptions & {
    onClose: () => void;
  }
>;
