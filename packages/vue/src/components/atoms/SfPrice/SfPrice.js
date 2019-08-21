export default {
  name: "SfPrice",
  props: {
    /**
     * Regular/old price value. Crossed out if `special` is provided
     */
    regular: {
      type: [String, Number],
      default: null
    },
    /**
     * Special price value
     */
    special: {
      type: [String, Number],
      default: null
    }
  }
};
