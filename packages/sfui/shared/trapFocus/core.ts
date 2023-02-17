import { isSafari } from '../index';
import {
  isCurrentLastElement,
  focusNextElement,
  focusFirstElement,
  focusLastElement,
  focusPrevElement,
  isCurrentFirstElement,
} from './utils';
import { focusNextOrFirstGroup, focusPrevOrLastGroup } from './groups';
import type { FocusableElement } from 'tabbable';

export const focusNextOrFirst = ({
  current,
  focusables,
  event,
}: {
  current?: FocusableElement;
  focusables: FocusableElement[];
  event?: KeyboardEvent;
}) => {
  if (isSafari) event?.preventDefault();
  if (current) {
    if (isCurrentLastElement(current, focusables)) return focusFirstElement({ focusables, event });
    if (isSafari || !event) {
      // Only enable tab moving for last and first element, rest handle browser
      return focusNextElement(current, focusables);
    }
  } else {
    return focusFirstElement({ focusables, event });
  }
};

export const focusPrevOrLast = ({
  current,
  focusables,
  event,
}: {
  current?: FocusableElement;
  focusables: FocusableElement[];
  event?: KeyboardEvent;
}) => {
  if (isSafari) event?.preventDefault();
  if (current) {
    if (isCurrentFirstElement(current, focusables)) return focusLastElement({ focusables, event });
    if (isSafari || !event) {
      // Only enable tab moving for last and first element, rest handle browser
      return focusPrevElement(current, focusables);
    }
  } else {
    return focusLastElement({ focusables, event });
  }
};

export const focusNext = ({
  current,
  event,
  focusables,
  arrowFocusGroupSelector,
}: {
  current?: FocusableElement;
  event?: KeyboardEvent;
  focusables: FocusableElement[];
  arrowFocusGroupSelector?: string;
}) => {
  if (arrowFocusGroupSelector) return focusNextOrFirstGroup({ current, focusables, arrowFocusGroupSelector });
  return focusNextOrFirst({ current, focusables, event });
};

export const focusPrev = ({
  current,
  focusables,
  event,
  arrowFocusGroupSelector,
}: {
  current?: FocusableElement;
  focusables: FocusableElement[];
  event?: KeyboardEvent;
  arrowFocusGroupSelector?: string;
}) => {
  if (arrowFocusGroupSelector) return focusPrevOrLastGroup({ current, focusables, arrowFocusGroupSelector });
  return focusPrevOrLast({ current, focusables, event });
};
