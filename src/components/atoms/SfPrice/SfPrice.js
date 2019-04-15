export default {
  name: "SfPrice",
  props: {
    /**
     * Regular price value
     */
    regularPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Special price value
     */
    specialPrice: {
      type: [String, Number],
      default: null
    },
    /**
     * Old price value
     */
    oldPrice: {
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
      return `${this.ariaLabelSpecial} ${this.specialPrice}`;
    },
    specialPriceAriaLabel() {
      return `${this.ariaLabelSpecial} ${this.specialPrice}`;
    },
    oldPriceAriaLabel() {
      return `${this.ariaLabelOld} ${this.oldPrice}`;
    }
  }
};
