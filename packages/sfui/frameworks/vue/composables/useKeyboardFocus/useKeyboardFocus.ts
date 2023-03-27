import { useFocusWithin, useEventListener } from '@vueuse/core';
import { watch, type Ref } from 'vue';

export function useKeyboardFocus(target: Ref<HTMLElement>) {
  const { focused } = useFocusWithin(target);
  const setOutlineStyle = () => {
    target.value.classList.add('outline', 'outline-offset');
  };
  watch(focused, (focused) => {
    if (focused) {
      useEventListener(target, 'keyup', () => setOutlineStyle());
    } else {
      target.value.classList.remove('outline', 'outline-offset');
    }
  });
}
