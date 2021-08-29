<template>
  <div class="sf-property" v-bind="$attrs">
    <!-- @slot Use this slot to replace property name -->
    <slot name="name">
      <span class="sf-property__name">
        {{ name }}
      </span>
    </slot>
    <!-- @slot Use this slot to replace property value -->
    <slot name="value">
      <span class="sf-property__value">
        {{ value }}
      </span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfProperty.scss";
</style>
