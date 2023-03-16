import { unrefElement } from '@vueuse/core';
import type { CheckOptions, FocusableElement, TabbableOptions } from 'tabbable';
import { tabbable } from 'tabbable';
import { type Ref, ref, watch } from 'vue';
import { focusFirstElement, focusNext, focusPrev, isTab, isTabAndShift } from '@storefront-ui/shared';
import { waitForNextRender } from '@storefront-ui/vue';

// TODO: add possibility to focus on init any number 1,2,3 and also support autofocus attr so user will be able to decide which element focus
export enum InitialFocusType {
  first = 'first',
  none = 'none',
}

type UseTrapFocusOptions = TabbableOptions &
  CheckOptions & {
    trapTabs?: boolean;
    arrowFocusGroupSelector?: string;
    activeState?: Ref<boolean>;
    initialFocus?: `${InitialFocusType}`;
  };
/**
 * arrowFocusGroupSelector - when arrow left/right press will focus first element of given selector requirement: all children needs to be same structure, options dedicated for slider with many items that has focusable elements inside
 * trapTabs - define if tab should be trapped inside container, usefull when user would like to have only arrow right/left trapped but not tab
 * */
const defaultOptions = {
  trapTabs: true,
  activeState: ref(true),
  initialFocus: InitialFocusType.first,
};
export const useTrapFocus = (containerElementRef: Ref<HTMLElement | undefined>, options?: UseTrapFocusOptions) => {
  const { trapTabs, arrowFocusGroupSelector, includeContainer, activeState, initialFocus } = {
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
      if (containerElement) {
        await waitForNextRender();
        containeHTMLElement = unrefElement(containerElement);

        containeHTMLElement?.addEventListener('focus', onFocusListener, true);
        containeHTMLElement?.addEventListener('keydown', onKeyDownListener);
      } else {
        removeEventListeners();
      }

      if (containerElement && activeState) {
        await waitForNextRender();
        focusableElements.value = tabbable(containeHTMLElement as HTMLElement, { includeContainer });

        if (initialFocus === InitialFocusType.first) focusFirstElement({ focusables: focusableElements.value });
      } else {
        focusableElements.value = [];
        currentlyFocused.value = undefined;
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
