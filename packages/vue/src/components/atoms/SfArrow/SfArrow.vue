<template>
  <SfButton class="sf-arrow" type="button" v-on="$listeners">
    <!--@slot Use this slot to replace arrow icon-->
    <slot>
      <SfIcon
        size="1.5rem"
        icon="arrow_left"
        aria-hidden="true"
        class="sf-arrow__icon"
      />
    </slot>
  </SfButton>
</template>
<script>
import SfButton from "../SfButton/SfButton";
import SfIcon from "../SfIcon/SfIcon";
export default {
  name: "SfArrow",
  components: { SfButton, SfIcon },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfArrow.scss";
</style>
