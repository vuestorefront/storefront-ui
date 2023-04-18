import { useEffect, useState } from 'react';
import { focusVisibleManager, FocusHandlerEvent, FocusModality } from '@storefront-ui/shared';
import { FocusVisibleProps, FocusVisibleResult } from './types';

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
