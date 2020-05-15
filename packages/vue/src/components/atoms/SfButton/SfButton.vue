<template>
  <button
    v-focus
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
import { focus } from "../../../utilities/directives";
export default {
  name: "SfButton",
  directives: {
    focus,
  },
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
