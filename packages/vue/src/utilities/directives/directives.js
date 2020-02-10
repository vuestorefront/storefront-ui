import Vue from "vue";

Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  },
  update: function(el, binding) {
    var value = binding.value;
    if (value) {
      Vue.nextTick(() => {
        el.focus();
      });
    }
  }
});
