import { unrefElement } from '@vueuse/core';
import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { type Ref, ref, watch } from 'vue';
import { focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { waitForNextRender } from '@storefront-ui/vue';

export enum InitialFocusType {
  autofocus = 'autofocus',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: Ref<boolean>;
    initialFocus?: number | `${InitialFocusType}` | false;
    initialFocusContainerFallback?: boolean;
    arrowKeysOn?: boolean;
  };

const defaultOptions = {
  trapTabs: true,
  activeState: ref(true),
  initialFocus: 0,
  initialFocusContainerFallback: false,
  arrowKeysOn: false,
};

export const useTrapFocus = (containerElementRef: Ref<HTMLElement | undefined>, options?: UseTrapFocusOptions) => {
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
  const currentlyFocused = ref<HTMLElement | undefined>();
  const focusableElements = ref<FocusableElement[]>([]);
  let containeHTMLElement: HTMLElement | undefined;

  const onFocusListener = () => {
    currentlyFocused.value = document.activeElement as HTMLElement;
  };

  const onKeyDownListener = (event: KeyboardEvent) => {
    const isAnyGroupElement = arrowFocusGroupSelector && containeHTMLElement?.querySelector(arrowFocusGroupSelector);
    if (arrowKeysOn) {
      if (event.key === 'ArrowRight') {
        focusNext({
          current: currentlyFocused.value,
          focusables: focusableElements.value,
          ...(isAnyGroupElement && { arrowFocusGroupSelector }),
        });
      } else if (event.key === 'ArrowLeft') {
        focusPrev({
          current: currentlyFocused.value,
          focusables: focusableElements.value,
          ...(isAnyGroupElement && { arrowFocusGroupSelector }),
        });
      }
    }

    if (trapTabs && isTab(event)) {
      focusNext({ current: currentlyFocused.value, event, focusables: focusableElements.value });
    }

    if (trapTabs && isTabAndShift(event)) {
      focusPrev({ current: currentlyFocused.value, event, focusables: focusableElements.value });
    }
  };

  const removeEventListeners = () => {
    containeHTMLElement?.removeEventListener('keydown', onKeyDownListener);
    containeHTMLElement?.removeEventListener('keydown', onFocusListener);
  };

  watch(
    [containerElementRef, activeState],
    async ([containerElement, activeState]) => {
      if (containerElement && activeState) {
        let focusFallbackNeeded = false;
        await waitForNextRender();
        containeHTMLElement = unrefElement(containerElement);

        containeHTMLElement?.addEventListener('focus', onFocusListener, true);
        containeHTMLElement?.addEventListener('keydown', onKeyDownListener);
        focusableElements.value = tabbable(containeHTMLElement as HTMLElement, { includeContainer });

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

        if (initialFocusContainerFallback && focusFallbackNeeded) containerElement.focus();
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
