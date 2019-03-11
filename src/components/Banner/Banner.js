export default {
  name: "VsfBanner",
  data() {
    return {
      stylesObj: {
        backgroundImage: 'url("' + this.bgImg + '")',
        backgroundColor: this.bgCol
      }
    };
  },
  props: {
    bgImg: {
      required: false,
      type: String,
      default: null
    },
    bgCol: {
      required: false,
      type: String,
      default: "#F1F2F3"
    },
    align: {
      required: false,
      type: String,
      default: "left"
    }
  }
};
