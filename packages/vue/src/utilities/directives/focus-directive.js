export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
  },
  bind: function(el) {
    el.addEventListener("mousedown", function bindMouse() {
      el.style.outline = "none";
      el.blur();
    });
    el.addEventListener("keyup", function bindKey() {
      el.style.outline = "";
      el.focus();
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", el.bindMouse());
    el.removeEventListener("keyup", el.bindKey());
  }
};
