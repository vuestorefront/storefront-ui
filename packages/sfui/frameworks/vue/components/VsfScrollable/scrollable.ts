import { onMounted, onUnmounted, Ref, ref, watch, nextTick, ComputedRef } from 'vue';
import type { VsfScrollableOptions } from '@storefront-ui/shared';
import { VSFScrollable } from '@storefront-ui/shared';

export function useScrollable<T extends HTMLElement>(
  options: ComputedRef<VsfScrollableOptions>,
): [Ref<T | undefined>, Ref<VSFScrollable | undefined>] {
  const container = ref<T>();
  const scrollable = ref<VSFScrollable>();

  watch(
    options,
    (options) => {
      scrollable.value?.update(options);
    },
    { deep: true },
  );

  onMounted(() => {
    nextTick(() => {
      if (container.value) {
        scrollable.value = new VSFScrollable(container.value, options.value);
      }
    });
  });

  onUnmounted(() => {
    scrollable.value?.destroy();
  });

  return [container, scrollable];
}
