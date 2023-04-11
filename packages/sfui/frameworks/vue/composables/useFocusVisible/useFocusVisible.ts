import { ref, watchEffect, onMounted, unref } from 'vue';
import { focusVisibleManager, FocusHandlerEvent, FocusModality } from '@storefront-ui/shared';
import { MaybeRef } from '@vueuse/core';

export interface FocusVisibleProps {
  /** Whether the element is a text input. */
  isTextInput?: MaybeRef<boolean>;
  /** Whether the element will be auto focused. */
  autoFocus?: MaybeRef<boolean>;
}

export interface FocusVisibleResult {
  /** Whether keyboard focus is visible globally. */
  isFocusVisible: MaybeRef<boolean>;
}

const manager = focusVisibleManager();

export const useFocusVisible = (props: FocusVisibleProps = {}): FocusVisibleResult => {
  const isTextInput = ref<boolean | undefined>(unref(props.isTextInput));
  const autoFocus = ref<boolean | undefined>(unref(props.autoFocus));
  const isFocusVisible = ref(autoFocus.value || manager.isFocusVisible());

  onMounted(() => {
    manager.setupGlobalFocusEvents();
  });

  watchEffect((onCleanup) => {
    const handler = (modality: FocusModality, e: FocusHandlerEvent) => {
      if (!manager.isKeyboardFocusEvent(isTextInput?.value, modality, e)) {
        return;
      }
      isFocusVisible.value = manager.isFocusVisible();
    };
    manager.changeHandlers.add(handler);
    onCleanup(() => manager.changeHandlers.delete(handler));
  });

  return { isFocusVisible };
};
