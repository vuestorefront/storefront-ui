import { type UseScrollableOptions, Scrollable } from '@storefront-ui/vue';
import { type ComputedRef, ref, watch, computed } from 'vue';
import { unrefElement } from '@vueuse/core';

export function useScrollable<TElement extends HTMLElement>(options?: ComputedRef<Partial<UseScrollableOptions>>) {
  const containerElement = ref<TElement>();
  const scrollable = ref<Scrollable | null>(null);
  const state = ref({ hasPrev: false, hasNext: false, isDragged: false });

  let unregister: () => void = () => ({});
  watch(
    [containerElement, options],
    () => {
      const container = unrefElement(containerElement);
      if (!container) return;
      unregister();

      scrollable.value = new Scrollable(container, {
        ...options?.value,
        onScroll: (data) => {
          state.value = { ...state.value, hasNext: data.hasNext, hasPrev: data.hasPrev };
          options?.value?.onScroll?.(data);
        },
        onDragChange: (data) => {
          state.value = { ...state.value, isDragged: data.isDragged };
          options?.value?.onDragChange?.(data);
        },
      });

      unregister = scrollable.value?.register();
      if (options?.value?.activeIndex) scrollable.value.scrollToIndex(options?.value?.activeIndex);
    },
    { immediate: true, deep: true },
  );

  const getPrevButtonProps = computed(() => {
    const onClick = () => {
      scrollable.value?.prev();
    };
    return {
      onClick,
      disabled: !state.value.hasPrev,
    };
  });

  const getNextButtonProps = computed(() => {
    const onClick = () => {
      scrollable.value?.next();
    };
    return {
      onClick,
      disabled: !state.value.hasNext,
    };
  });

  return {
    getContainerRef: containerElement,
    getPrevButtonProps,
    getNextButtonProps,
    state,
  };
}
