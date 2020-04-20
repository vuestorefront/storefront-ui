import Vue from "vue";
import { focusable, focusFirst, trap } from "./focus-trap/focus-trap.js";
export const focusTrap = {
  bind(el) {
    if (focusable(el).length > 0) {
      focusFirst(focusable(el)[0]);
    }
    el._keyHandler = function (e) {
        trap(e, focusable(el));
    };
    document.addEventListener("keydown", el._keyHandler);
  },
  unbind(el) {
    document.removeEventListener("keydown", el._keyHandler);
  },
};
