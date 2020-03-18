export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
  },
  bind: function(el) {
    const mouseHandler = function() {
      el.style.outline = "none";
      el.blur();
    }.bind(this);
    const keyHandler = function() {
      el.style.outline = "";
      el.focus();
    }.bind(this);
    el.addEventListener("mousedown", mouseHandler);
    el.addEventListener("keyup", keyHandler);
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", this.mouseHandler);
    el.removeEventListener("keyup", this.keyHandler);
  }
};
