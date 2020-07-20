<template>
  <div ref="range" class="sf-range" v-bind="$attrs" :disabled="disabled"></div>
</template>
<script>
import noUiSlider from "nouislider";
import wNumb from "wnumb";
export default {
  name: "SfRange",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    valueMin: {
      type: Number,
      default: 0,
    },
    valueMax: {
      type: Number,
      default: 1,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: true,
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
    tooltips: {
      type: Boolean,
      default: false,
    },
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
        if (this.$refs.range) {
          return this.updateRangeOptions({
            range: {
              min: value >= this.max ? this.max - 1 : value,
              max: this.max,
            },
          });
        }
      },
      immediate: true,
    },
    max: {
      handler(value) {
        return this.updateRangeOptions({
          range: {
            min: this.min,
            max: value <= this.min ? this.min + 1 : value,
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
        value
          ? (value = [
              wNumb(this.formatTooltipsValues),
              wNumb(this.formatTooltipsValues),
            ])
          : value;
        return this.updateRangeOptions({
          tooltips: value,
        });
      },
      immediate: true,
    },
    formatTooltipsValues: {
      handler(value) {
        if (this.tooltips)
          return this.updateRangeOptions({
            tooltips: [
              wNumb(this.formatTooltipsValues),
              wNumb(this.formatTooltipsValues),
            ],
          });
      },
      immediate: true,
    },
    horizontalOrientation: {
      handler(value) {
        value ? (value = "horizontal") : (value = "vertical");
        return this.resetAndChangeOption({
          orientation: value,
        });
      },
      immediate: true,
    },
    ltrDirection: {
      handler(value) {
        value ? (value = "ltr") : (value = "rtl");
        return this.resetAndChangeOption({ direction: value });
      },
      immediate: true,
    },
  },
  mounted() {
    this.config = {
      range: {
        min: this.min >= this.max ? this.max - 1 : this.min,
        max: this.max,
      },
      step: this.step,
      start: this.valueMax ? [this.valueMin, this.valueMax] : this.valueMin,
      connect: true,
      direction: this.ltrDirection ? "ltr" : "rtl",
      orientation: this.horizontalOrientation ? "horizontal" : "vertical",
      behaviour: "tap-drag",
      tooltips: false,
      keyboardSupport: true,
    };
    this.noUiSliderInit();
  },
  methods: {
    noUiSliderInit(changedValue) {
      const newConfig = Object.assign(this.config, changedValue);
      noUiSlider
        .create(this.$refs.range, newConfig)
        .on("change", (values) => this.$emit("change", values));
      // this.$refs.range.noUiSlider.on("keyup", (handle) => {
      //   const handleFocused = document.querySelector(
      //     `[data-handle="${handle}"]`
      //   );
      //   console.log(handleFocused);
      //   return handleFocused.style.outline = "";
      // });
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
