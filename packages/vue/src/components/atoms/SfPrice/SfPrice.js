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
    },
    /**
     * Aria label for regular price
     */
    ariaLabelRegular: {
      type: String,
      default: null
    },
    /**
     * Aria label for special price
     */
    ariaLabelSpecial: {
      type: String,
      default: null
    },
    /**
     * Aria label for old price
     */
    ariaLabelOld: {
      type: String,
      default: null
    }
  },
  computed: {
    regularPriceAriaLabel() {
      return `${this.ariaLabelSpecial} ${this.special}`;
    },
    specialPriceAriaLabel() {
      return `${this.ariaLabelSpecial} ${this.special}`;
    },
    oldPriceAriaLabel() {
      return `${this.ariaLabelOld} ${this.old}`;
    }
  }
};
