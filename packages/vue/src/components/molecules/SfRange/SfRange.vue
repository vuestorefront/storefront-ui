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
      type: [Number, String],
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
  },
  watch: {
    min: {
      handler(value) {
        if (this.$refs.range) {
          return this.updateOptions({
            range: {
              min: value,
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
            max: value,
          },
        });
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
  },
  mounted() {
    let config = {
      range: {
        min: this.min,
        max: this.min === this.max ? this.max + 1 : this.max,
      },
      step: this.step,
      start: this.valueMax ? [this.valueMin, this.valueMax] : this.valueMin,
      connect: true,
      direction: this.rangeDirection,
      orientation: this.rangeOrientation,
      behaviour: "tap-drag",
      tooltips: this.tooltipsShow,
    };
    noUiSlider
      .create(this.$refs.range, config)
      .on("change", (values) => this.$emit("change", values));
  },
  methods: {
    // resetAndChangeOption(changedValue, changedValueName) {
    //   if(this.$refs.range) {
    //   console.log(this.$refs.range, changedValueName, changedValue, this.config);
    //   this.$refs.range.noUiSlider.destroy();
    //   noUiSlider.create(this.$refs.range, {...this.config, changedValueName: changedValue}).on('change', (values) => this.$emit('change', values))
    //   this.$refs.range.noUiSlider[changedValueName].changedValue;
    //   }
    // },
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
