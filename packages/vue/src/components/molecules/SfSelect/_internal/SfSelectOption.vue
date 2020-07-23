<template>
  <option
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
