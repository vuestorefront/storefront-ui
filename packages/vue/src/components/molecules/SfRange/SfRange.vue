<template>
  <div class="sf-range" role="group" aria-labelledby="sfrange-label">
    <div id="sfrange-label">
      {{ label }}
    </div>
    <SfInput
      type="range"
      v-bind="$attrs"
      :value="valueMin"
      :min="min"
      :max="max"
      :step="step"
      :label="labelMin"
      name="nameMin"
      role="slider"
      tabindex="0"
      class="sf-range__slider"
      @input="sliderHandler('valueMin',$event)"
      :aria-valuemin="min"
      :aria-valuenow="valueMin"
      :aria-valuemax="max"
    />
    <span class="sf-range__slider-label" :style="styleLabel">{{
      valueMin
    }}</span>
    <SfInput
      type="range"
      v-bind="$attrs"
      :value="valueMax"
      :min="min"
      :max="max"
      :step="step"
      :label="labelMax"
      name="nameMax"
      role="slider"
      tabindex="0"
      class="sf-range__slider"
      @input="sliderHandler('valueMax',$event)"
      :aria-valuemin="min"
      :aria-valuenow="valueMax"
      :aria-valuemax="max"
    />
    <span class="sf-range__slider-label">{{ valueMax }}</span>
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
    styleLabel() {
      const newValue = Number(
          ((this.valueMin - this.min) * 100) / (this.max - this.min)
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
      if (slider === "valueMin") {
        this.valueMin = value;
      } else if (slider === "valueMax") {
        this.valueMax = value;
      }
      this.$emit("input", { [slider]: value });
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfRange.scss";
</style>
