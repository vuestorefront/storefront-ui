<template>
  <li
    class="sf-select-option"
    :class="{ 'sf-select-option--active': selected === value }"
    role="option"
    :aria-selected="selected === value ? 'true' : 'false'"
    @click="clicked"
  >
    <!-- @slot -->
    <slot />
  </li>
</template>
<script>
export default {
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    selected() {
      return this.$parent.selected;
    },
    indexes() {
      return this.$parent.indexes;
    }
  },
  methods: {
    clicked() {
      this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    }
  }
};
</script>
