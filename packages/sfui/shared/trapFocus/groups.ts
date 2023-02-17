import { focusFirstElement, focusLastElement } from './utils';
import type { FocusableElement } from 'tabbable';

export const findPrevFocusableInGroups = (
  current: FocusableElement,
  groupElementSelector: string,
  focusables: FocusableElement[],
) => {
  const reversedFocusables = [...focusables].reverse();
  const currentIndex = reversedFocusables.findIndex((focusable) => focusable === current);
  return reversedFocusables.find((focusable, index) => {
    if (
      index > currentIndex &&
      focusable.closest(groupElementSelector) &&
      current.closest(groupElementSelector) !== focusable.closest(groupElementSelector)
    ) {
      if (reversedFocusables[index + 1]?.closest(groupElementSelector) !== focusable.closest(groupElementSelector)) {
        return focusable;
      }
    }
  });
};

export const findNextFocusableInGroups = (
  current: FocusableElement,
  groupElementSelector: string,
  focusables: FocusableElement[],
) => {
  const currentIndex = focusables.findIndex((focusable) => focusable === current);

  return focusables.find((focusable, index) => {
    if (
      index > currentIndex &&
      focusable.closest(groupElementSelector) &&
      current.closest(groupElementSelector) !== focusable.closest(groupElementSelector)
    )
      return focusable;
  });
};

export const focusNextOrFirstGroup = ({
  current,
  focusables,
  arrowFocusGroupSelector,
}: {
  current?: FocusableElement;
  focusables: FocusableElement[];
  arrowFocusGroupSelector: string;
}) => {
  if (!current) return focusFirstElement({ focusables });

  const focusableElement = findNextFocusableInGroups(current, arrowFocusGroupSelector, focusables);
  if (current && focusableElement) {
    focusableElement?.focus();
    return focusableElement;
  } else {
    return focusFirstElement({ focusables });
  }
};

export const focusPrevOrLastGroup = ({
  current,
  focusables,
  arrowFocusGroupSelector,
}: {
  current?: FocusableElement;
  focusables: FocusableElement[];
  arrowFocusGroupSelector: string;
}) => {
  if (!current) return focusFirstElement({ focusables });

  const focusableElement = findPrevFocusableInGroups(current, arrowFocusGroupSelector, focusables);
  if (current && focusableElement) {
    focusableElement?.focus();
    return focusableElement;
  } else {
    return focusLastElement({ focusables });
  }
};
