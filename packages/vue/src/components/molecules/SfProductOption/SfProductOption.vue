<template>
  <div class="sf-product-option">
    <slot name="color" v-bind="{ color }">
      <div
        :class="{ 'display-none': !color }"
        class="sf-product-option__color"
        :style="{ background: color }"
      ></div>
    </slot>
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
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" src="./SfProductOption.scss"></style>
