<template>
  <div ref="range" type="range" class="sf-range" :disabled="disabled">
    <slot v-bind="$attrs" />
  </div>
</template>
<script>
import noUiSlider from "nouislider";
export default {
  name: "SfRange",
  props: {
    /*
     * Sets the number of sliders (1 or 2) by adding initial values to the array
     */
    value: {
      type: [Number, Array],
      default: () => [0, 1],
    },
    /*
     * Disabling the slider
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /*
     * Settings for noUiSlider library
     */
    config: {
      type: Object,
      default: () => {
        return {
          start: [0, 1],
          range: {
            min: 0,
            max: 10,
          },
          step: 1,
          connect: true,
          direction: "ltr",
          orientation: "horizontal",
          behaviour: "tap-drag",
          tooltips: false,
          keyboardSupport: true,
        };
      },
    },
  },
  watch: {
    config: {
      handler(value) {
        return this.resetAndChangeOption(value);
      },
      deep: true,
    },
  },
  mounted() {
    this.noUiSliderInit(this.config);
  },
  beforeDestroy() {
    if (this.$refs.range && this.$refs.range.noUiSlider)
      this.$refs.range.noUiSlider.destroy();
  },
  methods: {
    noUiSliderInit(changedValue) {
      const newConfig = Object.assign(this.config, changedValue);
      noUiSlider
        .create(this.$refs.range, newConfig)
        .on("change", (values) => this.$emit("change", values));
    },
    resetAndChangeOption(changedValue) {
      if (this.$refs.range.noUiSlider) {
        this.$refs.range.noUiSlider.destroy();
        this.noUiSliderInit(changedValue);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~nouislider/distribute/nouislider.css";
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
