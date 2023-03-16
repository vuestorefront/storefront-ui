import { computed, unref } from 'vue';
import { onClickOutside, onKeyStroke, type MaybeElementRef, type MaybeComputedRef } from '@vueuse/core';
import { flip, offset, shift } from '@floating-ui/vue';
import { type UseDropdownOptions, usePopover } from '@storefront-ui/vue';

export function useDropdown(options: UseDropdownOptions) {
  const { onClose, placement = 'bottom', middleware, isOpen, ...popoverOptions } = options;

  const { floatingRef, referenceRef, style } = usePopover({
    placement,
    middleware: computed(() => unref(middleware) || [offset(8), shift(), flip()]),
    isOpen,
    ...popoverOptions,
  });

  onClickOutside(referenceRef as MaybeElementRef, onClose);
  onKeyStroke('Escape', onClose, { target: referenceRef as MaybeComputedRef<EventTarget | null | undefined> });

  return { floatingRef, referenceRef, style };
}
