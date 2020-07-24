<template>
  <option
    :value="value"
    class="sf-select__option"
    :class="{ 'sf-select-option--is-active': selected === value }"
    tabindex="0"
  >
    <!-- @slot -->
    <slot />
  </option>
</template>
<script>
// import { focus } from "../../../../utilities/directives";
export default {
  name: "SfSelectOption",
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
  },
};
</script>
