export default {
  name: "SfRating",
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5
    },
    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1
    }
  }
};
