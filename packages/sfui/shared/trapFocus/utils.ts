import type { FocusableElement } from 'tabbable';

export const findCurrentFocusableIndex = (current: FocusableElement, focusables: FocusableElement[]) => {
  return focusables.findIndex((focusableElement) => focusableElement === current);
};

export const findNextFocusable = (current: FocusableElement, focusables: FocusableElement[]) => {
  const currentIndex = findCurrentFocusableIndex(current, focusables);
  return focusables[currentIndex + 1];
};

export const findPrevFocusable = (current: FocusableElement, focusables: FocusableElement[]) => {
  const currentIndex = findCurrentFocusableIndex(current, focusables);
  return focusables[currentIndex - 1];
};

export const focusFirstElement = ({ focusables, event }: { focusables: FocusableElement[]; event?: KeyboardEvent }) => {
  event?.preventDefault();
  const element = focusables[0];
  element?.focus();
  return element;
};
export const focusLastElement = ({ focusables, event }: { focusables: FocusableElement[]; event?: KeyboardEvent }) => {
  event?.preventDefault();
  const element = focusables[focusables.length - 1];
  element?.focus();
  return element;
};

export const focusNextElement = (current: FocusableElement, focusables: FocusableElement[]) => {
  const element = findNextFocusable(current, focusables);
  element?.focus();
  return element;
};

export const focusPrevElement = (current: FocusableElement, focusables: FocusableElement[]) => {
  const element = findPrevFocusable(current, focusables);
  element?.focus();
  return element;
};

export const isCurrentFirstElement = (current: FocusableElement, focusables: FocusableElement[]) => {
  const currentIndex = findCurrentFocusableIndex(current, focusables);
  return currentIndex === 0;
};

export const isCurrentLastElement = (current: FocusableElement, focusables: FocusableElement[]) => {
  const currentIndex = findCurrentFocusableIndex(current, focusables);
  return currentIndex === focusables.length - 1;
};
