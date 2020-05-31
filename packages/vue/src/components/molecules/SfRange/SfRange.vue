<template>
  <div class="sf-range">
    <SfInput type="range" :min="min" :max="max" :step="step" :label="label" />
    <slot> </slot>
  </div>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput";
export default {
  name: "SfRange",
  components: { SfInput },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
