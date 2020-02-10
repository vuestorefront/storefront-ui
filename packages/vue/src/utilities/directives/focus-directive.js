function mousedownHandler(el) {
  el.style.outlineWidth = "1px";
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
      el.style.outlineWidth = "0px";
      el.blur();
    });
    el.addEventListener("keydown", function() {
      el.style.outlineWidth = "1px";
      el.focus();
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", mousedownHandler(el));
    el.removeEventListener("keydown", keydownHandler(el));
  }
};
