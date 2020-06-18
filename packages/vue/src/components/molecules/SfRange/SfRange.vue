<template>
  <div ref="range" class="sf-range" v-bind="$attrs" :disabled="disabled"></div>
</template>
<script>
import noUiSlider from "nouislider";
// import SfInput from "../../atoms/SfInput/SfInput";
export default {
  name: "SfRange",
  // components: { SfInput },
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
  computed: {
    // orientation(value) {
    //   return this.resetAndChangeOption(value);
    // },
    // rangeDirection() {
    //   return this.direction ? 'ltr' : 'rtl';
    // }
  },
  watch: {
    // orientation: {
    //   handler(value){
    //     console.log(this.resetAndChangeOption(value));
    //     return this.resetAndChangeOption(value,'orientation');
    //   },
    //   immediate: true,
    // },
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
        if (this.$refs.range) {
          return this.updateOptions({
            range: {
              min: this.min,
              max: value,
            },
          });
        }
      },
      immediate: true,
    },
    step: {
      handler(value) {
        if (this.$refs.range) {
          return this.updateOptions({
            step: value,
          });
        }
      },
      immediate: true,
    },
    tooltips: {
      handler(value) {
        if (this.$refs.range) {
          return this.updateOptions({
            tooltips: value,
          });
        }
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
      console.log(this.$refs.range.noUiSlider, updatedOption);
      this.$refs.range.noUiSlider.updateOptions(updatedOption, false);
    },
  },
};
</script>
<style lang="scss">
@import "~nouislider/distribute/nouislider.css";
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
