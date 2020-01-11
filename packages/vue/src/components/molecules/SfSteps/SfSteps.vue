<template>
  <div class="sf-steps">
    <div class="sf-steps__header">
      <!-- @slot Use this slot to customise the steps -->
      <slot
        v-for="step in parsedSteps"
        name="steps"
        :step-click="stepClick"
        v-bind="{ step }"
      >
        <div
          :key="step.index"
          :class="{
            'sf-steps__header-step': true,
            'sf-steps__header-step-done': step.done,
            'sf-steps__header-step-current': step.current,
            'sf-steps__header-step-disabled': step.disabled
          }"
          @click="stepClick(step)"
        >
          <span>{{ step.step }}</span>
        </div>
      </slot>
      <div
        class="sf-steps__progress"
        :style="{ width: progressWidth, transform: `scaleX(${progress})` }"
      ></div>
    </div>
    <div class="sf-steps__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfStep from "./_internal/SfStep.vue";
Vue.component("SfStep", SfStep);
export default {
  name: "SfSteps",
  model: {
    prop: "active",
    event: "change"
  },
  provide() {
    const stepsData = {};
    Object.defineProperty(stepsData, "index", {
      enumerable: false,
      get: () => this.active
    });
    Object.defineProperty(stepsData, "name", {
      enumerable: false,
      get: () => this.steps[this.active]
    });
    Object.defineProperty(stepsData, "updateSteps", {
      enumerable: false,
      value: this.updateSteps
    });
    return {
      stepsData
    };
  },
  props: {
    /**
     * Current active step
     */
    active: {
      type: Number,
      default: 0
    },
    /**
     * Disable clicking on  a past step
     */
    canGoBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      steps: []
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
          current: index === this.active
        }));
      }
      return [];
    },
    progress() {
      return this.active + 1;
    },
    progressWidth() {
      return `${100 / this.steps.length}%`;
    }
  },
  methods: {
    updateSteps(step) {
      if (this.steps.includes(step)) return;
      this.steps.push(step);
    },
    stepClick({ index, disabled }) {
      if (!disabled) {
        /**
         * Active step changed event
         *
         * @event 'change'
         * @type {Number}
         */
        this.$emit("change", index);
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSteps.scss";
</style>
