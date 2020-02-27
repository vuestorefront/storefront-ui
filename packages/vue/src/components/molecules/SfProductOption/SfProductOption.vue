<template>
  <div class="sf-product-option">
    <!-- @slot Use this slot to replace product color option-->
    <slot name="color" v-bind="{ color }">
      <div
        v-if="color"
        class="sf-product-option__color"
        :style="{ background: color }"
      ></div>
    </slot>
    <!-- @slot Custom content for label -->
    <slot name="label" v-bind="{ label }">
      <div class="sf-product-option__label">{{ label }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfProductOption",
  props: {
    label: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfProductOption.scss";
</style>
