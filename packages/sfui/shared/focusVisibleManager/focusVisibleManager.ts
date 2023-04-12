import { isAndroid, isMac } from '../utils';
import { FocusHandler, FocusHandlerEvent, FocusModality } from './types';

// This code has been implemented based on @react-aria useFocusVisible
// https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useFocusVisible.ts

// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.

function isVirtualClick(event: MouseEvent | PointerEvent): boolean {
  // JAWS/NVDA with Firefox.
  if ((event as any).mozInputSource === 0 && event.isTrusted) {
    return true;
  }

  // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
  // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
  // to detect TalkBack virtual clicks.
  if (isAndroid && (event as PointerEvent).pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }

  return event.detail === 0 && !(event as PointerEvent).pointerType;
}

/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */
function isValidKey(e: KeyboardEvent) {
  // Control and Shift keys trigger when navigating back to the tab with keyboard.
  return !(
    e.metaKey ||
    (!isMac && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  );
}

export const focusVisibleManager = () => {
  let currentModality: FocusModality | null = null;
  const changeHandlers = new Set<FocusHandler>();
  let hasSetupGlobalListeners = false;
  let hasEventBeforeFocus = false;
  let hasBlurredWindowRecently = false;

  const isFocusVisible = () => currentModality !== 'pointer';

  const triggerChangeHandlers = (modality: FocusModality, e: FocusHandlerEvent) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const handler of changeHandlers) {
      handler(modality, e);
    }
  };

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    hasEventBeforeFocus = true;
    if (isValidKey(e)) {
      currentModality = 'keyboard';
      triggerChangeHandlers('keyboard', e);
    }
  };

  const handlePointerEvent = (e: PointerEvent | MouseEvent) => {
    currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
      hasEventBeforeFocus = true;
      triggerChangeHandlers('pointer', e);
    }
  };

  const handleClickEvent = (e: MouseEvent) => {
    if (isVirtualClick(e)) {
      hasEventBeforeFocus = true;
      currentModality = 'virtual';
    }
  };

  const handleFocusEvent = (e: FocusEvent) => {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) {
      return;
    }

    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
      currentModality = 'virtual';
      triggerChangeHandlers('virtual', e);
    }

    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = false;
  };

  const handleWindowBlur = () => {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    hasEventBeforeFocus = false;
    hasBlurredWindowRecently = true;
  };

  /**
   * Setup global event listeners to control when keyboard focus style should be visible.
   */
  const setupGlobalFocusEvents = () => {
    if (typeof window === 'undefined' || hasSetupGlobalListeners) {
      return;
    }

    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    // eslint-disable-next-line prefer-destructuring
    const focus = HTMLElement.prototype.focus;
    // eslint-disable-next-line func-names
    HTMLElement.prototype.focus = function () {
      hasEventBeforeFocus = true;
      // eslint-disable-next-line prefer-rest-params
      focus.apply(this, arguments as any);
    };

    document.addEventListener('keydown', handleKeyboardEvent, true);
    document.addEventListener('keyup', handleKeyboardEvent, true);
    document.addEventListener('click', handleClickEvent, true);

    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener('focus', handleFocusEvent, true);
    window.addEventListener('blur', handleWindowBlur, false);

    if (typeof PointerEvent !== 'undefined') {
      document.addEventListener('pointerdown', handlePointerEvent, true);
      document.addEventListener('pointermove', handlePointerEvent, true);
      document.addEventListener('pointerup', handlePointerEvent, true);
    } else {
      document.addEventListener('mousedown', handlePointerEvent, true);
      document.addEventListener('mousemove', handlePointerEvent, true);
      document.addEventListener('mouseup', handlePointerEvent, true);
    }

    hasSetupGlobalListeners = true;
  };

  /**
   * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
   * focus visible style can be properly set.
   */
  const isKeyboardFocusEvent = (isTextInput: boolean | undefined, modality: FocusModality, e: FocusHandlerEvent) =>
    !(
      isTextInput &&
      modality === 'keyboard' &&
      e instanceof KeyboardEvent &&
      // Only Tab or Esc keys will make focus visible on text input elements
      !['Tab', 'Escape'].includes(e.key)
    );

  return {
    isFocusVisible,
    changeHandlers,
    setupGlobalFocusEvents,
    isKeyboardFocusEvent,
  };
};
