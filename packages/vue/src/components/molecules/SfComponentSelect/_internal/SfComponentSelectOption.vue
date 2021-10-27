<template>
  <li
    :id="value"
    role="option"
    class="sf-component-select-option"
    :class="{ 'sf-component-select-option--is-active': selected === value }"
    tabindex="0"
    :aria-selected="selected === value ? 'true' : 'false'"
    :aria-label="value ? false : 'none'"
    @click="clicked"
    @keyup.space.enter="clicked"
  >
    <!-- @slot default -->
    <slot />
  </li>
</template>
<script>
import { focus } from "../../../../utilities/directives";
export default {
  name: "SfComponentSelectOption",
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
