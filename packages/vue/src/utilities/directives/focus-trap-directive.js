import { getFocusableChildrens, isFocusable, trap } from "./focus-trap/focus-trap.js";

export const focusTrap = {
  bind(el) {
    const focusableChildrenElements = getFocusableChildrens(el);
    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }
      trap(e, focusableChildrenElements);
    };
    document.addEventListener("keydown", el._keyHandler);
  },
  unbind(el) {
    if(el._lastFocusedElement) el._lastFocusedElement.focus()
    document.removeEventListener("keydown", el._keyHandler);
  },
};
