import { getFocusableChildren, isFocusable, moveFocus } from "./focus-trap";
import { nextTick } from "vue";

export const focusTrap = {
  mounted(el) {
    nextTick(() => {
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
  updated(el) {
    Vue.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },
  unmounted(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  },
};
