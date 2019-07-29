export default {
  name: "SfChevron",
  props: {
    /** Is SfChevron active. Direction of chevron depends on it  */
    isActive: {
      type: Boolean,
      default: false
    },
    /** Color of Chevron. Default is black.  */
    color: {
      type: String,
      default: "#000000"
    },
    /** Size of Chevron component. Default is 40px.  */
    size: {
      type: String,
      default: "40px"
    }
  },
  computed: {
    getStyle() {
      return {
        "--chevron-color": this.color,
        "--chevron-size": this.size
      };
    }
  }
};
