<template>
  <button
    class="sf-button"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <!--@slot Use this slot to place content inside the button.-->
    <slot />
  </button>
</template>
<script>
export default {
  name: "SfButton",
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
