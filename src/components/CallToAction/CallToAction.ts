import VsfButton from "../Button/Button.vue";

export default {
  name: "VsfCallToAction",
  data() {
    return {
      stylesObj: {
        backgroundImage: this.bgImg,
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
      default: "black"
    }
  },
  components: {
    VsfButton
  }
};
