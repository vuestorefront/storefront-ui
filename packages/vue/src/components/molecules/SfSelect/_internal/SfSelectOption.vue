<template>
  <option
    :value="value"
    class="sf-select__option"
    :selected="selected"
    tabindex="0"
  >
    <!-- @slot -->
    <slot />
  </option>
</template>
<script>
export default {
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Number, Object],
      default: "",
    },
    selected: {
      type: [String, Number, Object],
      default: "",
    },
  },
};
</script>
