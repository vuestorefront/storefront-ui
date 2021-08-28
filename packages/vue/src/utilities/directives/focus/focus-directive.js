export const focus = {
  beforeMount(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };
    el._keyHandler = function () {
      el.style.outline = "";
      el.focus();
    };
    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },
  unmounted(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  },
};
