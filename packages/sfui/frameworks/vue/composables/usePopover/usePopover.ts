import { autoUpdate, type FloatingElement, useFloating, type ReferenceElement } from '@floating-ui/vue';
import { ref, computed } from 'vue';
import { VsfPopoverPlacement, VsfPopoverStrategy, type UsePopoverOptions } from '@storefront-ui/vue';

export function usePopover<T extends ReferenceElement = ReferenceElement>(options: UsePopoverOptions<T>) {
  const {
    referenceRef = ref<T>(),
    floatingRef = ref<FloatingElement>(),
    isOpen = false,
    middleware,
    placement: initialPlacement = VsfPopoverPlacement.bottom,
    strategy: initialStrategy = VsfPopoverStrategy.absolute,
  } = options;

  const { strategy, x, y, middlewareData, placement } = useFloating<T>(referenceRef, floatingRef, {
    strategy: initialStrategy,
    placement: initialPlacement,
    open: isOpen,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const style = computed(() => {
    return {
      position: strategy.value,
      top: `${y.value ?? 0}px`,
      left: `${x.value ?? 0}px`,
    };
  });

  return { referenceRef, floatingRef, style, middlewareData, placement };
}
