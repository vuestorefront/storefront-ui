export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
  },
  bind: function(el) {
    el.addEventListener("mousedown", function() {
      el.style.outline = "none";
      el.blur();
    });
    el.addEventListener("keyup", function() {
      el.style.outline = "";
      el.focus();
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", function() {
      el.style.outline = "";
    });
    el.removeEventListener("keyup", function() {
      el.blur();
    });
  }
};
