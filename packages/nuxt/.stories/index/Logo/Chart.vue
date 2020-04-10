<template>
  <SfButton
    class="sf-arrow"
    type="button"
    :aria-label="ariaLabel"
    v-on="$listeners"
  >
    <!--@slot Use this slot to replace arrow icon-->
    <slot>
      <SfIcon icon="arrow_left" class="sf-arrow__icon" />
    </slot>
  </SfButton>
</template>
<script>
import SfButton from "../../../../vue/src/components/atoms/SfButton/SfButton";
import SfIcon from "../../../../vue/src/components/atoms/SfIcon/SfIcon";
export default {
  name: "SfArrow",
  components: { SfButton, SfIcon },
  props: {
    ariaLabel: {
      type: String,
      default: "Arrow"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfArrow.scss";
</style>
