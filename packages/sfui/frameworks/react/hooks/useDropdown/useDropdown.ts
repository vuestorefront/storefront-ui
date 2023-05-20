import { useClickAway, useKey } from 'react-use';
import { flip, offset, shift } from '@floating-ui/react-dom';

import { usePopover, type UseDropdownOptions } from '@storefront-ui/react';

export function useDropdown(options: UseDropdownOptions) {
  const {
    onClose,
    onCloseDeps,
    placement = 'bottom',
    middleware = [offset(8), shift(), flip()],
    ...popoverOptions
  } = options;

  const { refs, style } = usePopover({ placement, middleware, ...popoverOptions });

  useClickAway(refs.reference, onClose);
  useKey('Escape', onClose, { target: refs.reference.current }, onCloseDeps);

  return { refs, style };
}
