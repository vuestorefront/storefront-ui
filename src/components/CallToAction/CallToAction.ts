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
    message: {
      required: false,
      type: String,
      default: "Call to action"
    },
    buttonText: {
      required: false,
      type: String,
      default: "Button Text"
    },
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
