import Vue from "vue";

function mousedownHandler(el) {
  el.style.outlineWidth = "1px";
}

export const focus = {
  inserted: function(el) {
    el.tabindex = "0";
    el.focus();
  },
  update: function(el, binding) {
    var value = binding.value;
    if (value) {
      Vue.nextTick(() => {
        el.focus();
      });
    }
  },
  bind: function(el) {
    el.addEventListener("mousedown", function() {
      el.style.outlineWidth = "0";
    });
    el.addEventListener("keydown", function() {
      el.focus();
      el.style.outlineWidth = "1px";
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown", mousedownHandler(el));
  }
};
