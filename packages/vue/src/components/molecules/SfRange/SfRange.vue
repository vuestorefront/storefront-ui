<template>
  <div ref="range" type="range" class="sf-range" :disabled="disabled">
    <slot v-bind="$attrs" />
  </div>
</template>
<script>
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export default {
  name: "SfRange",
  props: {
    value: {
      type: Array,
      default: () => [0, 1],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
        };
      },
    },
  },
  watch: {
    config: {
      handler(newConfig) {
        if (this.$refs && this.$refs.range && this.$refs.range.noUiSlider) {
          this.$refs.range.noUiSlider.destroy();
          const newSlider = this.noUiSliderInit(newConfig);
          return newSlider;
        }
      },
      deep: true,
    },
    value: {
      handler(values) {
        if (this.$refs && this.$refs.range && this.$refs.range.noUiSlider) {
          return this.$refs.range.noUiSlider.set(values);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.noUiSliderInit(this.config);
  },
  beforeDestroy() {
    if (this.$refs && this.$refs.range && this.$refs.range.noUiSlider) {
      this.$refs.range.noUiSlider.destroy();
    }
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
<style lang="scss" src="./SfRange.scss"></style>
