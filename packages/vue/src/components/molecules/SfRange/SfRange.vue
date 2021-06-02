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
     * Sets the starting values for slider(s), if only one number is given than only one slider appears
     */
    value: {
      type: Array,
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
      handler(newConfig) {
        console.log(newConfig);
        this.$refs.range?.noUiSlider?.destroy();
        const newSlider = this.noUiSliderInit(newConfig);
        return newSlider;
      },
      deep: true,
    },
    value: {
      handler(values) {
        console.log(values);
        return this.$refs.range?.noUiSlider?.set(values);
      },
      immediate: true,
    },
  },
  mounted() {
    this.noUiSliderInit(this.config);
  },
  beforeDestroy() {
    this.$refs.range?.noUiSlider?.destroy();
  },
  methods: {
    noUiSliderInit(config) {
      const configSettings = Object.assign(this.config, config);
      noUiSlider
        .create(this.$refs.range, configSettings)
        .on("change", (values) => {
          this.$emit("change", values);
        });
    },
  },
};
</script>
<style lang="scss">
@import "~nouislider/dist/nouislider.css";
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
