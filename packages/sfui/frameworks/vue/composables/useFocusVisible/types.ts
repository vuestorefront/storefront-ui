import { MaybeRef } from '@vueuse/core';

export interface FocusVisibleProps {
  isTextInput?: MaybeRef<boolean>;
  autoFocus?: boolean;
}

export interface FocusVisibleResult {
  isFocusVisible: MaybeRef<boolean>;
}
