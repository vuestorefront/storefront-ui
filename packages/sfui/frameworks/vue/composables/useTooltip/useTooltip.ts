import { ref, unref, computed } from 'vue';
import { arrow, flip, offset, shift, type ReferenceElement, type Side } from '@floating-ui/vue';
import { type UseTooltipOptions, usePopover, useDisclosure } from '@storefront-ui/vue';

export function useTooltip<T extends ReferenceElement = ReferenceElement>(options?: UseTooltipOptions<T>) {
  const {
    placement: initialPlacement = 'top',
    strategy,
    middleware,
    arrowSize = '6px',
    ...popoverOptions
  } = options || {};
  const arrowRef = ref<HTMLElement>();
  const { isOpen, open, close, toggle } = useDisclosure();

  const {
    style: floatingStyle,
    middlewareData,
    placement,
    referenceRef,
    floatingRef,
  } = usePopover({
    isOpen,
    placement: initialPlacement,
    strategy,
    middleware: computed(() => [...(unref(middleware) || [offset(8), shift(), flip()]), arrow({ element: arrowRef })]),
    ...popoverOptions,
  });

  function arrowStyle() {
    if (middlewareData.value.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.value.arrow;
      const basePlacement = unref(placement).split('-')[0] as Side;
      return {
        position: 'absolute' as const,
        width: arrowSize,
        height: arrowSize,
        top: typeof arrowY === 'number' ? `${arrowY}px` : '',
        left: typeof arrowX === 'number' ? `${arrowX}px` : '',
        [{
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[basePlacement]]: `calc(${arrowSize} / -2)`,
      };
    }
    return {};
  }

  const triggerProps = computed(() => ({
    ref: referenceRef,
    onMouseenter: open,
    onMouseleave: close,
  }));

  const tooltipProps = computed(() => ({
    ref: floatingRef,
    style: floatingStyle.value,
  }));

  const arrowProps = computed(() => ({
    ref: arrowRef,
    style: arrowStyle(),
  }));

  return {
    referenceRef,
    floatingRef,
    arrowRef,
    style: computed(() => ({
      floating: floatingStyle.value,
      arrow: arrowStyle(),
    })),
    isOpen,
    open,
    close,
    toggle,
    triggerProps,
    tooltipProps,
    arrowProps,
  };
}
