<template>
  <div class="sf-steps">
    <div class="sf-steps__header">
      <slot
        v-for="step in parsedSteps"
        name="steps"
        :step-click="stepClick"
        v-bind="{ step }"
      >
        <SfButton
          :key="step.index"
          class="sf-button--pure"
          :class="{
            'sf-steps__step': true,
            'is-done': step.done,
            current: step.current,
            'is-disabled': step.disabled,
          }"
          data-testid="steps-button"
          @click="stepClick(step)"
        >
          <span class="sf-steps__title">{{ step.step }}</span>
        </SfButton>
      </slot>
      <div
        class="sf-steps__progress"
        :style="progress"
        data-testid="steps-progress"
      ></div>
    </div>
    <div class="sf-steps__content">
      <slot />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfStep from "./_internal/SfStep.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
Vue.component("SfStep", SfStep);
export default {
  name: "SfSteps",
  components: {
    SfButton,
  },
  model: {
    prop: "active",
    event: "change",
  },
  provide() {
    const stepsData = {};
    Object.defineProperty(stepsData, "index", {
      enumerable: false,
      get: () => this.active,
    });
    Object.defineProperty(stepsData, "name", {
      enumerable: false,
      get: () => this.steps[this.active],
    });
    Object.defineProperty(stepsData, "updateSteps", {
      enumerable: false,
      value: this.updateSteps,
    });
    return {
      stepsData,
    };
  },
  props: {
    active: {
      type: Number,
      default: 0,
    },
    canGoBack: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      steps: [],
    };
  },
  computed: {
    parsedSteps() {
      if (this.steps) {
        return this.steps.map((step, index) => ({
          index,
          step,
          done: index < this.active,
          disabled: !this.canGoBack && index < this.active,
          current: index === this.active,
        }));
      }
      return [];
    },
    progress() {
      return {
        "--_steps-progress-width": `${100 / this.steps.length}%`,
        "--_steps-progress-active-step": this.active + 1,
      };
    },
  },
  methods: {
    updateSteps(step) {
      if (this.steps.includes(step)) return;
      this.steps.push(step);
    },
    stepClick({ index, disabled }) {
      if (!disabled) {
        this.$emit("change", index);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSteps.scss";
</style>
