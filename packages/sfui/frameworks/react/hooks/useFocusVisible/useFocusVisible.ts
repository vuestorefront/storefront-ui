import { useEffect, useState } from 'react';
import { focusVisibleManager, FocusHandlerEvent, FocusModality } from '@storefront-ui/shared';

export interface FocusVisibleProps {
  /** Whether the element is a text input. */
  isTextInput?: boolean;
  /** Whether the element will be auto focused. */
  autoFocus?: boolean;
}

export interface FocusVisibleResult {
  /** Whether keyboard focus is visible globally. */
  isFocusVisible: boolean;
}

const manager = focusVisibleManager();

export const useFocusVisible = (props: FocusVisibleProps = {}): FocusVisibleResult => {
  manager.setupGlobalFocusEvents();
  const { isTextInput, autoFocus } = props;
  const [isFocusVisible, setFocusVisible] = useState(autoFocus || manager.isFocusVisible());

  useEffect(() => {
    const handler = (modality: FocusModality, e: FocusHandlerEvent) => {
      if (!manager.isKeyboardFocusEvent(isTextInput, modality, e)) {
        return;
      }
      setFocusVisible(manager.isFocusVisible());
    };
    manager.changeHandlers.add(handler);
    return () => {
      manager.changeHandlers.delete(handler);
    };
  }, [isTextInput]);

  return { isFocusVisible };
};
