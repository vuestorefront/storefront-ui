import { syncRefs } from '@vueuse/core';
import { ref, isRef, unref, Ref } from 'vue';
import type { UseDisclosureOptions } from '@storefront-ui/vue';

export function useDisclosure({ initialValue = false }: UseDisclosureOptions = {}): {
  isOpen: Ref<boolean>;
  open: () => boolean;
  close: () => boolean;
  toggle: () => boolean;
} {
  const isOpen: Ref<boolean> = ref<boolean>(unref(initialValue));
  const toggle: (value?: boolean | undefined) => boolean = (value?: boolean) => (isOpen.value = value ?? !isOpen.value);
  console.log(isOpen.value)

  if (isRef(initialValue)) syncRefs(initialValue, isOpen);

  const open: () => boolean = () => toggle(true);
  const close: () => boolean = () => toggle(false);
  return { isOpen, open, close, toggle };
}
