<template>
  <div
    ref="range"
    v-focus
    class="sf-range"
    v-bind="$attrs"
    :disabled="disabled"
  ></div>
</template>
<script>
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import focus from "../../../utilities/directives";
export default {
  name: "SfRange",
  directives: {
    focus,
  },
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
    orientation: {
      type: Boolean,
      default: true,
    },
    /*
     * Ltr orientation if true, rtl orientation if false
     */
    direction: {
      type: Boolean,
      default: true,
    },
    tooltips: {
      type: Boolean,
      default: false,
    },
    formatValues: {
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
      rangeOrientation: "horizontal",
      rangeDirection: "ltr",
    };
  },
  watch: {
    min: {
      handler(value) {
        if (this.$refs.range) {
          return this.updateOptions({
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
        return this.updateOptions({
          range: {
            min: this.min,
            max: value <= this.min ? this.min + 1 : value,
          },
        });
      },
      immediate: true,
    },
    valueMin: {
      handler(value) {
        return wNumb(this.formatValues).to(value);
      },
      immediate: true,
    },
    valueMax: {
      handler(value) {
        return wNumb(this.formatValues).to(value);
      },
      immediate: true,
    },
    step: {
      handler(value) {
        return this.updateOptions({
          step: value,
        });
      },
      immediate: true,
    },
    tooltips: {
      handler(value) {
        return this.updateOptions({
          tooltips: value,
        });
      },
      immediate: true,
    },
    orientation: {
      handler(value) {
        this.rangeOrientation = value ? "horizontal" : "vertical";
        return this.resetAndChangeOption({
          orientation: this.rangeOrientation,
        });
      },
      immediate: true,
    },
    direction: {
      handler(value) {
        this.rangeDirection = value ? "ltr" : "rtl";
        return this.resetAndChangeOption({ direction: this.rangeDirection });
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
      direction: this.rangeDirection,
      orientation: this.rangeOrientation,
      behaviour: "tap-drag",
      tooltips: this.tooltipsShow,
      keyboardSupport: true,
    };
    this.noUiSliderInit();
  },
  methods: {
    noUiSliderInit(changedValue) {
      noUiSlider
        .create(this.$refs.range, { ...this.config, ...changedValue })
        .on("change", (values) => this.$emit("change", values));
      this.$refs.range.noUiSlider.on("onkeyup", (handle) => {
        const handleFocused = document.querySelector(
          `[data-handle="${handle}"]`
        );
        console.log(handleFocused);
        return handleFocused.classList.add("key-focus");
      });
    },
    resetAndChangeOption(changedValue) {
      if (this.$refs.range) {
        this.$refs.range.noUiSlider.destroy();
        this.noUiSliderInit(changedValue);
      }
    },
    updateOptions(updatedOption) {
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
