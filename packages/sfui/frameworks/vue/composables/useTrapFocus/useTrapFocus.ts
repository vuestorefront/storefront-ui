import { unrefElement } from '@vueuse/core';
import { CheckOptions, FocusableElement, tabbable, TabbableOptions } from 'tabbable';
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
    /**
     * Enabling both `left` | `up` | `right` | `down` arrow keys.
     * @deprecated Since version 2.3. Use arrowKeysLeftRight or/and arrowKeysUpDown options instead.
     */
    arrowKeysOn?: boolean;
    arrowKeysLeftRight?: boolean;
    arrowKeysUpDown?: boolean;
  };

type UseTrapFocusReturn = {
  current: Ref<HTMLElement | undefined>;
  focusables: Ref<FocusableElement[]>;
  focusNext: typeof focusNext;
  focusPrev: typeof focusPrev;
  updateFocusableElements: () => void;
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
    // eslint-disable-next-line etc/no-deprecated
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

    if (arrowKeysOn && (event.key === 'ArrowLeft' || event.key === 'ArrowUp')) focusPreviousItem({ additionalData });
    if (arrowKeysOn && (event.key === 'ArrowRight' || event.key === 'ArrowDown')) focusNextItem({ additionalData });

    if (arrowKeysLeftRight && event.key === 'ArrowLeft') focusPreviousItem({ additionalData });
    if (arrowKeysLeftRight && event.key === 'ArrowRight') focusNextItem({ additionalData });
    if (arrowKeysUpDown && event.key === 'ArrowUp') focusPreviousItem({ additionalData });
    if (arrowKeysUpDown && event.key === 'ArrowDown') focusNextItem({ additionalData });

    if (trapTabs && isTab(event)) focusNextItem({ event });
    if (trapTabs && isTabAndShift(event)) focusPreviousItem({ event });
  };

  const removeEventListeners = () => {
    containerHTMLElement?.removeEventListener('keydown', onKeyDownListener);
    containerHTMLElement?.removeEventListener('focus', onFocusListener, true);
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

  const updateFocusableElements = () => {
    focusableElements.value = tabbable(containerElementRef.value as HTMLElement, { includeContainer });
  };

  return {
    current: currentlyFocused,
    focusables: focusableElements,
    focusNext,
    focusPrev,
    updateFocusableElements,
  };
};
