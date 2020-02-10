function mousedownHandler(el) {
  el.style.outlineWidth = "";
}

function keydownHandler(el) {
  el.blur();
}

export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
  },
  bind: function(el) {
    el.addEventListener("mousedown", function() {
      el.style.outlineWidth = "0";
      el.blur();
    });
    el.addEventListener("keyup", function() {
      el.style.outlineWidth = "";
      el.focus();
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", mousedownHandler(el));
    el.removeEventListener("keyup", keydownHandler(el));
  }
};
