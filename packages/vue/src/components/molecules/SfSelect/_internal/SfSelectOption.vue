<template>
  <li
    :id="value"
    role="option"
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
import { focus } from "../../../../utilities/directives";
export default {
  name: "SfSelectOption",
  directives: { focus },
  inject: ["optionIndexes"],
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
      return this.optionIndexes.indexes;
    },
  },
  methods: {
    clicked() {
      console.log(this.value);
      this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    },
  },
};
</script>
