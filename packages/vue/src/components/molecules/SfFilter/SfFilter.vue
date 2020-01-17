<template>
  <div class="sf-filter" :class="{ 'sf-filter--active': selected }">
    <!-- @slot  -->
    <slot name="label" v-bind="{ label }">
      <SfCheckbox
        class="sf-filter__checkbox"
        name="label"
        :label="label"
        :style="style"
        :selected="selected"
        @input="this.$emit("input", !selected);"
      />
    </slot>
    <slot name="count" v-bind="{ count }">
      <div class="sf-filter__count">{{ count }}</div>
    </slot>
  </div>
</template>
<script>
import SfCheckbox from "../../atoms/SfCheckbox/SfCheckbox.vue";

export default {
  name: "SfFilter",
  components: {
    SfCheckbox
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return this.selected ? "font-weight: 500" : "font-weight: 400";
    },
    isChecked() {
      return this.selected;
    }
  },
  methods: {
    setActive() {
      this.$emit("input", !this.selected);
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFilter.scss";
</style>
