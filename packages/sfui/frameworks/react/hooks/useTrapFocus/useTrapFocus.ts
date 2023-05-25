import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { useCallback, useEffect, useState, type RefObject } from 'react';

export enum InitialFocusType {
  autofocus = 'autofocus',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: boolean;
    initialFocus?: number | `${InitialFocusType}` | false;
    initialFocusContainerFallback?: boolean;
    arrowKeysOn?: boolean;
  };

const defaultOptions = {
  trapTabs: true,
  activeState: true,
  initialFocus: 0,
  initialFocusContainerFallback: false,
  arrowKeysOn: false,
};

export const useTrapFocus = (containerElementRef: RefObject<HTMLElement | null>, options?: UseTrapFocusOptions) => {
  const {
    trapTabs,
    arrowFocusGroupSelector,
    includeContainer,
    activeState,
    initialFocus,
    arrowKeysOn,
    initialFocusContainerFallback,
  } = {
    ...defaultOptions,
    ...options,
  };

  const [current, setCurrent] = useState<HTMLElement>();
  const [focusables, setFocusables] = useState<FocusableElement[]>([]);
  const onKeyDownListener = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      const isAnyGroupElement =
        arrowFocusGroupSelector && containerElementRef.current?.querySelector(arrowFocusGroupSelector);

      if (arrowKeysOn) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          focusNext({
            current,
            focusables,
            ...(isAnyGroupElement && { arrowFocusGroupSelector }),
          });
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          focusPrev({
            current,
            focusables,
            ...(isAnyGroupElement && { arrowFocusGroupSelector }),
          });
        }
      }

      if (trapTabs && isTab(event)) {
        focusNext({ current, event, focusables });
      }

      if (trapTabs && isTabAndShift(event)) {
        focusPrev({ current, event, focusables });
      }
    },
    [current],
  );
  const onFocusListener = () => {
    const activeElement = document.activeElement as HTMLElement | undefined;
    setCurrent(activeElement);
  };

  const removeEventListeners = () => {
    containerElementRef.current?.removeEventListener('keydown', onKeyDownListener);
    containerElementRef.current?.removeEventListener('focus', onFocusListener, true);
  };

  useEffect(() => {
    if (containerElementRef.current && activeState) {
      containerElementRef.current?.addEventListener('focus', onFocusListener, true);
      containerElementRef.current?.addEventListener('keydown', onKeyDownListener);
      let focusFallbackNeeded = false;
      setFocusables(tabbable(containerElementRef.current, { includeContainer }));

      if (typeof initialFocus === 'number') {
        if (!focusables[initialFocus]) {
          // eslint-disable-next-line no-console
          console.error(`There is no element with given index ${initialFocus}`);
          focusFallbackNeeded = true;
        } else {
          focusables[initialFocus]?.focus();
        }
      } else if (initialFocus === InitialFocusType.autofocus) {
        const autofocusElement = focusables.find((focusable) => focusable?.hasAttribute('autofocus'));
        if (autofocusElement) {
          autofocusElement.focus();
        } else {
          focusFallbackNeeded = true;
        }
      }
      if (initialFocusContainerFallback && focusFallbackNeeded) containerElementRef.current.focus();
    }

    return removeEventListeners;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerElementRef.current, activeState, onKeyDownListener]);
  return {
    current,
    focusables,
    focusNext,
    focusPrev,
  };
};
