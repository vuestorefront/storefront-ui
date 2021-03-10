export const focus = {
  bind(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };
    el._keyHandler = function (e) {
      el.style.outline = "";
      if (e.code === "Tab") el.focus();
    };
    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },
  unbind(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  },
};
