<template>
  <div class="sf-filter" :class="{ 'sf-filter--active': selected }">
    <!-- @slot  -->
    <slot name="label" v-bind="{ label }">
      <div class="sf-filter__label">{{ label }}</div>
    </slot>
    <!-- @slot  -->
    <slot name="count" v-bind="{ count }">
      <div class="sf-filter__count">{{ count }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfFilter",
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
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFilter.scss";
</style>
