import { FocusEvent, useCallback, useRef } from 'react';

export interface FocusWithinProps {
  /** Whether the focus within events should be disabled. */
  isDisabled?: boolean;
  /** Handler that is called when the target element or a descendant receives focus. */
  onFocusWithin?: (e: FocusEvent) => void;
  /** Handler that is called when the target element and all descendants lose focus. */
  onBlurWithin?: (e: FocusEvent) => void;
  /** Handler that is called when the the focus within state changes. */
  onFocusWithinChange?: (isFocusWithin: boolean) => void;
}

/**
 * Handles focus events for the target and its descendants.
 */
export function useFocusWithin(props: FocusWithinProps) {
  const { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  const state = useRef({
    isFocusWithin: false,
  });

  const onBlur = useCallback(
    (e: FocusEvent) => {
      if (state.current.isFocusWithin && !(e.currentTarget as Element).contains(e.relatedTarget as Element)) {
        state.current.isFocusWithin = false;

        if (onBlurWithin) {
          onBlurWithin(e);
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(false);
        }
      }
    },
    [onBlurWithin, onFocusWithinChange, state],
  );

  const onFocus = useCallback(
    (e: FocusEvent) => {
      if (!state.current.isFocusWithin && document.activeElement === e.target) {
        if (onFocusWithin) {
          onFocusWithin(e);
        }

        if (onFocusWithinChange) {
          onFocusWithinChange(true);
        }

        state.current.isFocusWithin = true;
        onBlur(e);
      }
    },
    [onFocusWithin, onFocusWithinChange, onBlur],
  );

  if (isDisabled) {
    return {
      focusWithinProps: {
        onFocus: null,
        onBlur: null,
      },
    };
  }

  return {
    focusWithinProps: {
      onFocus,
      onBlur,
    },
  };
}
