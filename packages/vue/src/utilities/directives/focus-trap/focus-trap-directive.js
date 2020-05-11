import { getFocusableChildren, isFocusable, moveFocus } from "./focus-trap";
import Vue from "vue";

export const focusTrap = {
  bind(el) {
    Vue.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, el._focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }
      moveFocus(e, el._focusableChildrenElements);
    };
    document.addEventListener("keydown", el._keyHandler);
  },
  componentUpdated(el) {
    Vue.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },
  unbind(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  },
};
