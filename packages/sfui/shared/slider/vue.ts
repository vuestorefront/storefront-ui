import { isRef, onMounted, onUnmounted, Ref, ref, watch, nextTick } from 'vue';
import type { Options } from './types';
import VSFSlider from './slider';

export function useSlider<T extends HTMLElement>(
  options: Ref<Partial<Options>> | Partial<Options>,
): [Ref<T | undefined>, Ref<VSFSlider | undefined>] {
  const container = ref<T>();
  const slider = ref<VSFSlider>();

  if (isRef(options)) {
    watch(
      options,
      (newOptions) => {
        if (slider.value) slider.value.update(newOptions);
      },
      { deep: true },
    );
  }

  onMounted(() => {
    nextTick(() => {
      if (container.value) {
        slider.value = new VSFSlider(container.value, isRef(options) ? options.value : options);
      }
    });
  });

  onUnmounted(() => {
    if (slider.value) slider.value.destroy();
  });

  return [container, slider];
}
