<template>
  <div class="sf-property">
    <!-- @slot Use this slot to replace property name -->
    <slot name="name" v-bind="{ name }">
      <span class="sf-property__name">{{ name }}:</span>
    </slot>
    <!-- @slot Use this slot to replace property value -->
    <slot name="value" v-bind="{ value }">
      <span class="sf-property__value">{{ value }}</span>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProperty.scss";
</style>
