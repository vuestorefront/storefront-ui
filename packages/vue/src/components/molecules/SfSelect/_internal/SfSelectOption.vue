<template>
  <li
    class="sf-select-option"
    :class="{ 'sf-select-option--is-active': selected === value }"
    tabindex="0"
    :aria-selected="selected === value ? 'true' : 'false'"
    @click="clicked"
    @keyup.space.enter="clicked"
  >
    <!-- @slot -->
    <slot />
  </li>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfSelectOption",
  directives: { focus },
  props: {
    value: {
      type: [String, Number, Object],
      default: "",
    },
  },
  computed: {
    selected() {
      return this.$parent.selected;
    },
    indexes() {
      return this.$parent.indexes;
    },
  },
  methods: {
    clicked() {
      this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    },
  },
};
</script>
