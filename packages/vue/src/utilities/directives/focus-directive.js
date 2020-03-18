export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
  },
  bind: function(el) {
    el.addEventListener("mousedown", function handleMouse() {
      el.style.outline = "none";
      el.blur();
    });
    el.addEventListener("keyup", function handleKey() {
      el.style.outline = "";
      el.focus();
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", el.handleMouse());
    el.removeEventListener("keyup", el.handleKey());
  }
};
