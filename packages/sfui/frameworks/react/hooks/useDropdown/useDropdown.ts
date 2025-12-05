import { useClickAway, useKey } from 'react-use';
import { flip, offset, shift } from '@floating-ui/react-dom';

import { usePopover, type UseDropdownOptions } from '@storefront-ui/react';

export function useDropdown(options: UseDropdownOptions) {
  const {
    onClose,
    onCloseDeps,
    placement = 'bottom',
    middleware = [offset(8), shift(), flip()],
    isOpen,
    ...popoverOptions
  } = options;

  const { refs, style } = usePopover({ placement, middleware, isOpen, ...popoverOptions });

  useClickAway<PointerEvent | MouseEvent | TouchEvent>(refs.reference, (e) => {
    if (isOpen) {
      onClose?.(e);
    }
  });
  useKey('Escape', onClose, { target: refs.reference.current }, onCloseDeps);

  return { refs, style };
}
