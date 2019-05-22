export default {
  name: "SfRadio",
  props: {
    /**
     * Array of objects, keys (label) and (value) are required, more keys are optional
     */
    options: {
      type: Array,
      default: () => []
    },
    /**
     * Value of selected option
     */
    value: {
      type: [Number, String],
      default: null
    }
  }
};
