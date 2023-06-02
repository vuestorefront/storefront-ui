import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { useCallback, useEffect, useState, type RefObject } from 'react';

export enum InitialFocusType {
  autofocus = 'autofocus',
  container = 'container',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: boolean;
    initialFocus?: number | `${InitialFocusType}` | false;
    initialFocusContainerFallback?: boolean;
    /**
     * Enabling both `left` | `up` | `right` | `down` arrow keys.
     * @deprecated Since version 2.3. Use arrowKeysLeftRight or/and arrowKeysUpDown options instead.
     */
    arrowKeysOn?: boolean;
    arrowKeysLeftRight?: boolean;
    arrowKeysUpDown?: boolean;
  };

const defaultOptions = {
  trapTabs: true,
  activeState: true,
  initialFocus: 0,
  initialFocusContainerFallback: false,
  arrowKeysOn: false,
  arrowKeysLeftRight: false,
  arrowKeysUpDown: false,
};

export const useTrapFocus = (containerElementRef: RefObject<HTMLElement | null>, options?: UseTrapFocusOptions) => {
  const {
    trapTabs,
    arrowFocusGroupSelector,
    includeContainer,
    activeState,
    initialFocus,
    arrowKeysOn,
    arrowKeysLeftRight,
    arrowKeysUpDown,
    initialFocusContainerFallback,
  } = {
    ...defaultOptions,
    ...options,
  };

  const [currentlyFocused, setCurrentlyFocused] = useState<HTMLElement>();
  const [focusableElements, setFocusableElements] = useState<FocusableElement[]>([]);
  const focusPreviousItem = ({
    event,
    additionalData,
  }: {
    event?: KeyboardEvent;
    additionalData?: Record<string, unknown>;
  }) =>
    focusPrev({
      current: currentlyFocused,
      focusables: focusableElements,
      event,
      ...additionalData,
    });

  const focusNextItem = ({
    event,
    additionalData,
  }: {
    event?: KeyboardEvent;
    additionalData?: Record<string, unknown>;
  }) =>
    focusNext({
      current: currentlyFocused,
      focusables: focusableElements,
      event,
      ...additionalData,
    });

  const onKeyDownListener = useCallback(
    (event: KeyboardEvent) => {
      const isAnyGroupElement =
        arrowFocusGroupSelector && containerElementRef.current?.querySelector(arrowFocusGroupSelector);
      const additionalData = isAnyGroupElement ? { arrowFocusGroupSelector } : {};

      if (arrowKeysOn && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) focusPreviousItem({ additionalData });
      if (arrowKeysOn && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) focusNextItem({ additionalData });

      if (arrowKeysLeftRight && event.key === 'ArrowLeft') focusPreviousItem({ additionalData });
      if (arrowKeysLeftRight && event.key === 'ArrowRight') focusNextItem({ additionalData });
      if (arrowKeysUpDown && event.key === 'ArrowUp') focusPreviousItem({ additionalData });
      if (arrowKeysUpDown && event.key === 'ArrowDown') focusNextItem({ additionalData });

      if (trapTabs && isTab(event)) focusNextItem({ event });
      if (trapTabs && isTabAndShift(event)) focusPreviousItem({ event });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentlyFocused],
  );

  const onFocusListener = () => {
    const activeElement = document.activeElement as HTMLElement | undefined;
    setCurrentlyFocused(activeElement);
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
      setFocusableElements(tabbable(containerElementRef.current, { includeContainer }));

      if (typeof initialFocus === 'number') {
        if (!focusableElements[initialFocus]) {
          // eslint-disable-next-line no-console
          console.error(`There is no element with given index ${initialFocus}`);
          focusFallbackNeeded = true;
        } else {
          focusableElements[initialFocus]?.focus();
        }
      } else if (initialFocus === InitialFocusType.autofocus) {
        const autofocusElement = focusableElements.find((focusable) => focusable?.hasAttribute('autofocus'));
        if (autofocusElement) {
          autofocusElement.focus();
        } else {
          focusFallbackNeeded = true;
        }
      }

      if ((initialFocusContainerFallback && focusFallbackNeeded) || initialFocus === InitialFocusType.container)
        containerElementRef.current?.focus();
    } else {
      setFocusableElements([]);
      setCurrentlyFocused(undefined);
    }

    return removeEventListeners;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerElementRef.current, activeState, onKeyDownListener]);

  const updateFocusableElements = () => {
    if (!containerElementRef.current) return;
    setFocusableElements(tabbable(containerElementRef.current as HTMLElement, { includeContainer }));
  };

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
    updateFocusableElements,
  };
};
