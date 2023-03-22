import { useSlots, useAttrs, ref, onBeforeUpdate } from 'vue';

export const useSlotsRef = () => {
  const slots = ref(useSlots());

  // slots need to be updated manually, becuase useSlots returns not a reactive object
  // see: https://vuejs.org/api/composition-api-setup.html#setup-context
  // see: https://github.com/vuejs/core/issues/6202#issuecomment-1278776852
  onBeforeUpdate(() => {
    slots.value = useSlots();
  });

  return slots;
};

export const useAttrsRef = () => {
  const attrs = ref(useAttrs());

  // slots need to be updated manually, becuase useSlots returns not a reactive object
  // see: https://vuejs.org/api/composition-api-setup.html#setup-context
  // see: https://github.com/vuejs/core/issues/6202#issuecomment-1278776852
  onBeforeUpdate(() => {
    attrs.value = useAttrs();
  });

  return attrs;
};
