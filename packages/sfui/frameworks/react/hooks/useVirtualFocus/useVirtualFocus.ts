/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import * as React from 'react';

/**
 * The code below comes partially from Mantine UI lib:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-utils/src/create-scoped-keydown-handler/create-scoped-keydown-handler.ts
 */
function getPreviousIndex(current: number, elements: HTMLElement[], loop: boolean) {
  for (let i = current - 1; i >= 0; i -= 1) {
    /**
     * Expected TypeError as ekements are of type HTMLElement that disabled property does not exist.
     * We should find a proper typing to keep checking `disabled` and at the same time let users pass any element.
     * Originaly type of elements was `HTMLButtonElement[]`, but we don;t want to restrict only to buttons.
     */
    if (!elements[i].disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }

  return current;
}

function getNextIndex(current: number, elements: HTMLElement[], loop: boolean) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }

  return current;
}

interface VirtualFocus {
  index: number;
  reset: () => void;
  first: () => void;
}

interface UseVirtualFocusOptions {
  /** Container element node used to scope the items */
  container: HTMLElement | null;

  /** Valid selector used to find all items, e.g. '[role="option"]' */
  itemSelector: string;

  /** By default virtual focus can't use .focus() method. Set `true` If you want to enable that behaviour. Useful for Tabs when you want to make an active tab tab-index="0" while the rest are tab-index="-1" */
  useFocus?: boolean;

  /** Enable items looping. */
  loop?: boolean;

  /** Define how items align, e.g. usually listbox options are `vertical` and tabs are `horizontal` */
  orientation?: 'vertical' | 'horizontal';

  /** Text direction */
  dir?: 'rtl' | 'ltr';

  /** Click element on focus */
  activateOnFocus?: boolean;

  /** External keydown handler */
  onKeyDown?(virtualFocus: VirtualFocus, event: React.KeyboardEvent<HTMLElement>): void;
}

export const useVirtualFocus = (options: UseVirtualFocusOptions) => {
  const {
    container,
    itemSelector,
    loop = false,
    orientation = 'vertical',
    // dir = 'rtl',
    useFocus = false,
    activateOnFocus = false,
    onKeyDown,
  } = options;
  const [virtualFocusIndex, setVirtualFocusIndex] = React.useState<number>(-1);

  const reset = React.useCallback(() => {
    setVirtualFocusIndex(-1);
  }, []);

  const first = React.useCallback(() => {
    setVirtualFocusIndex(0);
  }, []);

  const virtualFocus = React.useMemo(
    () => ({
      index: virtualFocusIndex,
      reset,
      first,
    }),
    [first, reset, virtualFocusIndex],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // onKeyDown?.(virtualFocus, event);

    const elements = Array.from(container?.querySelectorAll<HTMLElement>(itemSelector) || []);
    const current = elements.findIndex((el) => event.currentTarget === el);
    console.log({ container, elements });
    const _nextIndex = getNextIndex(useFocus ? current : virtualFocus.index, elements, loop);
    const _previousIndex = getPreviousIndex(useFocus ? current : virtualFocus.index, elements, loop);
    /**
     * This code reverts arrows which leeds to reverted behaviour for horizontal orientation. I'm not sure if it's necessery.
     */
    // const nextIndex = dir === 'rtl' ? _previousIndex : _nextIndex;
    // const previousIndex = dir === 'rtl' ? _nextIndex : _previousIndex;

    switch (event.key) {
      case 'ArrowRight': {
        if (orientation === 'horizontal') {
          event.stopPropagation();
          event.preventDefault();

          setVirtualFocusIndex(_nextIndex);

          useFocus && elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }

        break;
      }

      case 'ArrowLeft': {
        if (orientation === 'horizontal') {
          event.stopPropagation();
          event.preventDefault();

          setVirtualFocusIndex(_previousIndex);
          useFocus && elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }

        break;
      }

      case 'ArrowUp': {
        if (orientation === 'vertical') {
          event.stopPropagation();
          event.preventDefault();

          setVirtualFocusIndex(_previousIndex);
          useFocus && elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }

        break;
      }

      case 'ArrowDown': {
        if (orientation === 'vertical') {
          event.stopPropagation();
          event.preventDefault();

          setVirtualFocusIndex(_nextIndex);
          useFocus && elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }

        break;
      }

      case 'Home': {
        event.stopPropagation();
        event.preventDefault();

        setVirtualFocusIndex(0);
        useFocus && !elements[0].disabled && elements[0].focus();
        break;
      }

      case 'End': {
        event.stopPropagation();
        event.preventDefault();

        const last = elements.length - 1;
        setVirtualFocusIndex(last);
        useFocus && !elements[last].disabled && elements[last].focus();
        break;
      }

      default:
        break;
    }

    onKeyDown?.(virtualFocus, event);
  };

  return {
    onKeyDown: handleKeyDown,
    virtualFocus,
  };
};
