export default {
  name: "SfSteps",
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    /**
     * Steps to show
     */
    steps: {
      type: Array,
      required: true
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
    }
  },
  methods: {
    stepClick({ index, disabled }) {
      if (!disabled) {
        this.$emit("change", index);
      }
    }
  }
};
