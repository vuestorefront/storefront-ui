<template>
  <div ref="range" class="sf-range" v-bind="$attrs" :disabled="disabled"></div>
</template>
<script>
import noUiSlider from "nouislider";
import wNumb from "wnumb";
export default {
  name: "SfRange",
  props: {
    /*
     * Sets the number of sliders (1 or 2) by adding initial values to the array
     */
    slidersInitialValues: {
      type: Array,
      default: () => [0, 1],
    },
    /*
     * Minimal value of the slider
     */
    min: {
      type: Number,
      default: 0,
    },
    /*
     * Maximum value of the slider
     */
    max: {
      type: Number,
      default: 0,
    },
    /*
     * The value of moving the slider on the scale
     */
    step: {
      type: Number,
      default: 1,
    },
    /*
     * Disabling the slider
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /*
     * Horizontal orientation if true, vertical orientation if false
     */
    horizontalOrientation: {
      type: Boolean,
      default: true,
    },
    /*
     * Ltr orientation if true, rtl orientation if false
     */
    ltrDirection: {
      type: Boolean,
      default: true,
    },
    /*
     * Boolean for showing the tooltips
     */
    tooltips: {
      type: Boolean,
      default: false,
    },
    /*
     * Config for toolips formatting (from wNumb library):
     * decimals - number of digits after dot/comma
     * mark - sign separating the fraction value from integer
     * thousand - sign separating the thousands from hundreds
     * prefix - sign before value
     * suffix - sign after the value
     * negative - sign for negative values, by default it is set to "-"
     */
    formatTooltipsValues: {
      type: Object,
      default: () => {
        return {
          decimals: 2,
          mark: ".",
          thousand: " ",
          prefix: "$",
          suffix: "",
          negative: "",
        };
      },
    },
  },
  data() {
    return {
      config: {},
    };
  },
  watch: {
    min: {
      handler(value) {
        return this.updateRangeOptions({
          range: {
            min: value >= this.max ? this.max - this.step : value,
            max: this.max,
          },
        });
      },
      immediate: true,
    },
    max: {
      handler(value) {
        return this.updateRangeOptions({
          range: {
            min: this.min,
            max: value <= this.min ? this.min + this.step : value,
          },
        });
      },
      immediate: true,
    },
    step: {
      handler(value) {
        return this.updateRangeOptions({
          step: value,
        });
      },
      immediate: true,
    },
    tooltips: {
      handler(value) {
        const wNumbFormatter = wNumb(this.formatTooltipsValues);
        if (value) {
          value =
            this.slidersInitialValues.length === 2
              ? [wNumbFormatter, wNumbFormatter]
              : [wNumbFormatter];
        } else {
          return value;
        }
        return this.updateRangeOptions({
          tooltips: value,
        });
      },
      immediate: true,
    },
    formatTooltipsValues: {
      handler(value) {
        const wNumbFormatter = wNumb(this.formatTooltipsValues);
        if (this.tooltips)
          return this.updateRangeOptions({
            tooltips:
              this.slidersInitialValues.length === 2
                ? [wNumbFormatter, wNumbFormatter]
                : [wNumbFormatter],
          });
      },
      immediate: true,
    },
    horizontalOrientation: {
      handler(value) {
        let orientationValue = value ? "horizontal" : "vertical";
        return this.resetAndChangeOption({
          orientation: orientationValue,
        });
      },
      immediate: true,
    },
    ltrDirection: {
      handler(value) {
        let directionValue = value ? "ltr" : "rtl";
        return this.resetAndChangeOption({ direction: directionValue });
      },
      immediate: true,
    },
  },
  mounted() {
    this.config = {
      start: this.slidersInitialValues,
      range: {
        min: this.min >= this.max ? this.max - 1 : this.min,
        max: this.max,
      },
      step: this.step,
      connect: true,
      direction: this.ltrDirection ? "ltr" : "rtl",
      orientation: this.horizontalOrientation ? "horizontal" : "vertical",
      behaviour: "tap-drag",
      tooltips: false,
      keyboardSupport: true,
    };
    this.noUiSliderInit();
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
      if (this.$refs.range) {
        this.$refs.range.noUiSlider.destroy();
        this.noUiSliderInit(changedValue);
      }
    },
    updateRangeOptions(updatedOption) {
      if (this.$refs.range) {
        return this.$refs.range.noUiSlider.updateOptions(updatedOption, false);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~nouislider/distribute/nouislider.css";
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
