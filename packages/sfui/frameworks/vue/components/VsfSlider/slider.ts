import { onMounted, onUnmounted, Ref, ref, watch, nextTick, ComputedRef } from 'vue';
import type { VsfSliderOptions } from '@storefront-ui/shared';
import { VSFSlider } from '@storefront-ui/shared';

export function useSlider<T extends HTMLElement>(
  options: ComputedRef<VsfSliderOptions>,
): [Ref<T | undefined>, Ref<VSFSlider | undefined>] {
  const container = ref<T>();
  const slider = ref<VSFSlider>();

  watch(
    options,
    (options) => {
      slider.value?.update(options);
    },
    { deep: true },
  );

  onMounted(() => {
    nextTick(() => {
      if (container.value) {
        slider.value = new VSFSlider(container.value, options.value);
      }
    });
  });

  onUnmounted(() => {
    slider.value?.destroy();
  });

  return [container, slider];
}
