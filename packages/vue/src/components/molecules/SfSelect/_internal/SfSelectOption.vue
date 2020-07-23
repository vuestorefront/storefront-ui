<template>
  <option
    v-focus
    :value="value"
    class="sf-select__option"
    :class="{ 'sf-select-option--is-active': selected === value }"
    tabindex="0"
    @click="selected"
  >
    <!-- @slot -->
    <slot />
  </option>
</template>
<script>
import { focus } from "../../../../utilities/directives";
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
    //   indexes() {
    //     return this.$parent.indexes;
    //   },
    // },
    // methods: {
    //   clicked() {
    //     this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    //   },
  },
};
</script>
