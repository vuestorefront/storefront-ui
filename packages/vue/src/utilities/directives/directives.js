import Vue from "vue";

export const focus = {
  inserted: function(el) {
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
      el.style.outline = "0";
    });
  },
  unbind: function(el) {
    el.removeEventListener("mousedown");
  }
};
