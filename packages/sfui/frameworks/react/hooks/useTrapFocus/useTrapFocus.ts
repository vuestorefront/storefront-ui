import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { useEffect, useRef, type RefObject } from 'react';

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

/**
 * @deprecated Since version 2.3.
 * @param {boolean} arrowKeysOn - Enabling both `letf` | `up` | `right` | `down` arrow keys.
 */
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
  const currentlyFocused = useRef<HTMLElement | undefined>();
  const focusableElements = useRef<FocusableElement[]>([]);

  const focusPreviousItem = ({
    event,
    additionalData,
  }: {
    event?: KeyboardEvent;
    additionalData?: Record<string, unknown>;
  }) =>
    focusPrev({
      current: currentlyFocused.current,
      focusables: focusableElements.current,
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
      current: currentlyFocused.current,
      focusables: focusableElements.current,
      event,
      ...additionalData,
    });

  const onKeyDownListener = (event: KeyboardEvent) => {
    const isAnyGroupElement =
      arrowFocusGroupSelector && containerElementRef.current?.querySelector(arrowFocusGroupSelector);
    const additionalData = isAnyGroupElement ? { arrowFocusGroupSelector } : {};

    if ((arrowKeysLeftRight && event.key === 'ArrowLeft') || arrowKeysOn) focusPreviousItem({ additionalData });
    if ((arrowKeysLeftRight && event.key === 'ArrowRight') || arrowKeysOn) focusNextItem({ additionalData });
    if ((arrowKeysUpDown && event.key === 'ArrowUp') || arrowKeysOn) focusPreviousItem({ additionalData });
    if ((arrowKeysUpDown && event.key === 'ArrowDown') || arrowKeysOn) focusNextItem({ additionalData });

    if (trapTabs && isTab(event)) focusNextItem({ event });
    if (trapTabs && isTabAndShift(event)) focusPreviousItem({ event });
  };

  const onFocusListener = () => {
    currentlyFocused.current = document.activeElement as HTMLElement | undefined;
  };

  const removeEventListeners = () => {
    containerElementRef.current?.removeEventListener('keydown', onKeyDownListener);
    containerElementRef.current?.removeEventListener('keydown', onFocusListener);
  };

  useEffect(() => {
    // console.log(containerElementRef.current, activeState);
    if (containerElementRef.current && activeState) {
      containerElementRef.current?.addEventListener('focus', onFocusListener, true);
      containerElementRef.current?.addEventListener('keydown', onKeyDownListener);
      let focusFallbackNeeded = false;
      focusableElements.current = tabbable(containerElementRef.current, { includeContainer });

      if (typeof initialFocus === 'number') {
        if (!focusableElements.current[initialFocus]) {
          // eslint-disable-next-line no-console
          console.error(`There is no element with given index ${initialFocus}`);
          focusFallbackNeeded = true;
        } else focusableElements.current[initialFocus].focus();
      } else if (initialFocus === InitialFocusType.autofocus) {
        const autofocusElement = focusableElements.current.find((focusable) => focusable.hasAttribute('autofocus'));
        if (autofocusElement) autofocusElement.focus();
        else focusFallbackNeeded = true;
      }

      if ((initialFocusContainerFallback && focusFallbackNeeded) || initialFocus === InitialFocusType.container)
        containerElementRef.current?.focus();
    } else {
      focusableElements.current = [];
      currentlyFocused.current = undefined;
    }

    return removeEventListeners;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerElementRef.current, focusableElements.current, currentlyFocused.current, activeState]);

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
  };
};
