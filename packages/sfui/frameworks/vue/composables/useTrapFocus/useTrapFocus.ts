import { unrefElement } from '@vueuse/core';
import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { type Ref, ref, watch } from 'vue';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { waitForNextRender } from '@storefront-ui/vue';

export enum InitialFocusType {
  autofocus = 'autofocus',
  container = 'container',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: Ref<boolean>;
    initialFocus?: number | `${InitialFocusType}` | false;
    initialFocusContainerFallback?: boolean;
    arrowKeysOn?: boolean;
    arrowKeysLeftRight?: boolean;
    arrowKeysUpDown?: boolean;
  };

type UseTrapFocusReturn = {
  current: Ref<HTMLElement | undefined>;
  focusables: Ref<FocusableElement[]>;
  focusNext: typeof focusNext;
  focusPrev: typeof focusPrev;
};

const defaultOptions = {
  trapTabs: true,
  activeState: ref(true),
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
export const useTrapFocus = (
  containerElementRef: Ref<HTMLElement | undefined>,
  options?: UseTrapFocusOptions,
): UseTrapFocusReturn => {
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
  const currentlyFocused = ref<HTMLElement | undefined>();
  const focusableElements = ref<FocusableElement[]>([]);
  let containerHTMLElement: HTMLElement | undefined;

  const onFocusListener = () => {
    currentlyFocused.value = document.activeElement as HTMLElement;
  };

  const focusPreviousItem = ({
    event,
    additionalData,
  }: {
    event?: KeyboardEvent;
    additionalData?: Record<string, unknown>;
  }) =>
    focusPrev({
      current: currentlyFocused.value,
      focusables: focusableElements.value,
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
      current: currentlyFocused.value,
      focusables: focusableElements.value,
      event,
      ...additionalData,
    });

  const onKeyDownListener = (event: KeyboardEvent) => {
    const isAnyGroupElement = arrowFocusGroupSelector && containerHTMLElement?.querySelector(arrowFocusGroupSelector);
    const additionalData = isAnyGroupElement ? { arrowFocusGroupSelector } : {};

    if ((arrowKeysLeftRight && event.key === 'ArrowLeft') || arrowKeysOn) focusPreviousItem({ additionalData });
    if ((arrowKeysLeftRight && event.key === 'ArrowRight') || arrowKeysOn) focusNextItem({ additionalData });
    if ((arrowKeysUpDown && event.key === 'ArrowUp') || arrowKeysOn) focusPreviousItem({ additionalData });
    if ((arrowKeysUpDown && event.key === 'ArrowDown') || arrowKeysOn) focusNextItem({ additionalData });

    if (trapTabs && isTab(event)) focusNextItem({ event });
    if (trapTabs && isTabAndShift(event)) focusPreviousItem({ event });
  };

  const removeEventListeners = () => {
    containerHTMLElement?.removeEventListener('keydown', onKeyDownListener);
    containerHTMLElement?.removeEventListener('keydown', onFocusListener);
  };

  watch(
    [containerElementRef, activeState],
    async ([containerElement, activeState]) => {
      if (containerElement && activeState) {
        let focusFallbackNeeded = false;
        await waitForNextRender();
        containerHTMLElement = unrefElement(containerElement);

        containerHTMLElement?.addEventListener('focus', onFocusListener, true);
        containerHTMLElement?.addEventListener('keydown', onKeyDownListener);
        focusableElements.value = tabbable(containerHTMLElement as HTMLElement, { includeContainer });

        if (typeof initialFocus === 'number') {
          if (!focusableElements.value[initialFocus]) {
            console.error(`There is no element with given index ${initialFocus}`);
            focusFallbackNeeded = true;
          } else focusableElements.value[initialFocus].focus();
        } else if (initialFocus === InitialFocusType.autofocus) {
          const autofocusElement = focusableElements.value.find((focusable) => focusable.hasAttribute('autofocus'));
          if (autofocusElement) autofocusElement.focus();
          else focusFallbackNeeded = true;
        }

        if ((initialFocusContainerFallback && focusFallbackNeeded) || initialFocus === InitialFocusType.container)
          containerHTMLElement?.focus();
      } else {
        focusableElements.value = [];
        currentlyFocused.value = undefined;
        removeEventListeners();
      }
    },
    { immediate: true },
  );

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
  };
};
