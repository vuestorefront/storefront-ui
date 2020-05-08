<template>
  <SfButton class="sf-arrow" type="button" v-on="$listeners">
    <!--@slot Use this slot to replace arrow icon-->
    <slot>
      <SfIcon aria-hidden="true" icon="arrow_left" class="sf-arrow__icon" />
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
