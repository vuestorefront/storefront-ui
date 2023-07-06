import { autoUpdate, type FloatingElement, useFloating, type ReferenceElement } from '@floating-ui/vue';
import { ref, computed } from 'vue';
import { SfPopoverPlacement, SfPopoverStrategy, type UsePopoverOptions } from '@storefront-ui/vue';

export function usePopover<ReferenceEl extends ReferenceElement = ReferenceElement>(
  options: UsePopoverOptions<ReferenceEl>,
) {
  const {
    referenceRef = ref<ReferenceEl>(),
    floatingRef = ref<FloatingElement>(),
    isOpen = false,
    middleware,
    placement: initialPlacement = SfPopoverPlacement.bottom,
    strategy: initialStrategy = SfPopoverStrategy.absolute,
  } = options;

  const { strategy, x, y, middlewareData, placement } = useFloating<ReferenceEl>(referenceRef, floatingRef, {
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
