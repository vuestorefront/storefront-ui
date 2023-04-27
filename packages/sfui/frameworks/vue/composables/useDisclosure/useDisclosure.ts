import { syncRefs } from '@vueuse/core';
import { ref, isRef, unref } from 'vue';
import type { UseDisclosureOptions } from '@storefront-ui/vue';

export function useDisclosure({ initialValue = false }: UseDisclosureOptions = {}) {
  const isOpen = ref<boolean>(unref(initialValue));
  const toggle = (value?: boolean) => (isOpen.value = value ?? !isOpen.value);

  if (isRef(initialValue)) syncRefs(initialValue, isOpen, { immediate: true });

  const open = () => toggle(true);
  const close = () => toggle(false);

  return { isOpen, open, close, toggle };
}
