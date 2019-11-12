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
    return {
      stepsData
    };
  },
  props: {
    /**
     * Steps to show
     */
    steps: {
      type: Array,
      default: () => []
    },
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
