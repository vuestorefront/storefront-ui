import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { useEffect, useRef, type RefObject } from 'react';

export enum InitialFocusType {
  autofocus = 'autofocus',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: boolean;
    initialFocus?: number | `${InitialFocusType}` | false;
    arrowKeysOn?: boolean;
  };

const defaultOptions = {
  trapTabs: true,
  activeState: true,
  initialFocus: 0,
  arrowKeysOn: false,
};

export const useTrapFocus = (containerElementRef: RefObject<HTMLElement | null>, options?: UseTrapFocusOptions) => {
  const { trapTabs, arrowFocusGroupSelector, includeContainer, activeState, initialFocus, arrowKeysOn } = {
    ...defaultOptions,
    ...options,
  };
  const currentlyFocused = useRef<HTMLElement | undefined>();
  const focusableElements = useRef<FocusableElement[]>([]);

  const onKeyDownListener = (event: KeyboardEvent) => {
    const isAnyGroupElement =
      arrowFocusGroupSelector && containerElementRef.current?.querySelector(arrowFocusGroupSelector);

    if (arrowKeysOn) {
      if (event.key === 'ArrowRight') {
        focusNext({
          current: currentlyFocused.current,
          focusables: focusableElements.current,
          ...(isAnyGroupElement && { arrowFocusGroupSelector }),
        });
      } else if (event.key === 'ArrowLeft') {
        focusPrev({
          current: currentlyFocused.current,
          focusables: focusableElements.current,
          ...(isAnyGroupElement && { arrowFocusGroupSelector }),
        });
      }
    }

    if (trapTabs && isTab(event)) {
      focusNext({ current: currentlyFocused.current, event, focusables: focusableElements.current });
    }

    if (trapTabs && isTabAndShift(event)) {
      focusPrev({ current: currentlyFocused.current, event, focusables: focusableElements.current });
    }
  };
  const onFocusListener = () => {
    currentlyFocused.current = document.activeElement as HTMLElement | undefined;
  };

  const removeEventListeners = () => {
    containerElementRef.current?.removeEventListener('keydown', onKeyDownListener);
    containerElementRef.current?.removeEventListener('keydown', onFocusListener);
  };

  useEffect(() => {
    if (containerElementRef.current) {
      containerElementRef.current?.addEventListener('focus', onFocusListener, true);
      containerElementRef.current?.addEventListener('keydown', onKeyDownListener);
    } else {
      removeEventListeners();
    }
    if (containerElementRef.current && activeState) {
      focusableElements.current = tabbable(containerElementRef.current, { includeContainer });

      if (typeof initialFocus === 'number') {
        try {
          focusableElements.current[initialFocus]?.focus();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(`There is no element with given index ${initialFocus}`);
        }
      } else if (initialFocus === InitialFocusType.autofocus) {
        focusableElements.current.find((focusable) => focusable.hasAttribute('autofocus'))?.focus();
      }
    } else {
      focusableElements.current = [];
      currentlyFocused.current = undefined;
    }

    return removeEventListeners;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeState, containerElementRef.current]);

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
  };
};
