<template>
  <component
    :is="components.SfButton"
    class="sf-arrow"
    type="button"
    v-bind="$attrs"
  >
    <!--@slot Use this slot to replace arrow icon-->
    <slot>
      <component
        :is="components.SfIcon"
        size="1.5rem"
        icon="arrow_left"
        aria-hidden="true"
        v-bind="$attrs"
        class="sf-arrow__icon"
      />
    </slot>
  </component>
</template>
<script>
import SfButton from "../SfButton/SfButton";
import SfIcon from "../SfIcon/SfIcon";
export default {
  name: "SfArrow",
  inject: {
    components: {
      default: { SfButton, SfIcon },
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfArrow.scss";
</style>
