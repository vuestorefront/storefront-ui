<template>
  <div class="sf-range" role="group" aria-labelledby="sfrange-label">
    <div id="sfrange-label">
      {{ label }}
    </div>
    <SfInput
      v-model="valueMin"
      type="range"
      v-bind="$attrs"
      name="nameMin"
      role="slider"
      tabindex="0"
      class="sf-range__slider"
      :value="valueMin"
      :min="min"
      :max="max"
      :step="step"
      :label="labelMin"
      :aria-valuemin="min"
      :aria-valuenow="valueMin"
      :aria-valuemax="max"
      @input="sliderHandler('valueMin', $event)"
    />
    <span class="sf-range__slider-label" :style="styleLabelMin">{{
      valueMin
    }}</span>
    <SfInput
      v-model="valueMax"
      type="range"
      v-bind="$attrs"
      name="nameMax"
      role="slider"
      tabindex="0"
      class="sf-range__slider"
      :value="valueMax"
      :min="min"
      :max="max"
      :step="step"
      :label="labelMax"
      :aria-valuemin="min"
      :aria-valuenow="valueMax"
      :aria-valuemax="max"
      @input="sliderHandler('valueMax', $event)"
    />
    <span class="sf-range__slider-label" :style="styleLabelMax">{{
      valueMax
    }}</span>
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
    /* only for screen readers purposes */
    labelMin: {
      type: String,
      default: "",
    },
    /* only for screen readers purposes */
    labelMax: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      valueMin: 0,
      valueMax: 0,
    };
  },
  computed: {
    styleLabelMin() {
      const newValue = Number(
          ((this.valueMin - this.min) * 100) / (this.max - this.min)
        ),
        newPosition = 10 - newValue * 0.2;
      return `left: calc(${newValue}% + (${newPosition}px))`;
    },
    styleLabelMax() {
      const newValue = Number(
          ((this.valueMax - this.min) * 100) / (this.max - this.min)
        ),
        newPosition = 10 - newValue * 0.2;
      return `left: calc(${newValue}% + (${newPosition}px))`;
    },
  },
  watch: {
    valueMin: {
      handler(value) {
        return value > this.valueMax ? this.valueMax : value;
      },
      immediate: true,
    },
    valueMax: {
      handler(value) {
        return value < this.valueMin ? this.valueMin : value;
      },
      immediate: true,
    },
  },
  methods: {
    sliderHandler(slider, value) {
      this.$emit("input", { [slider]: value });
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
