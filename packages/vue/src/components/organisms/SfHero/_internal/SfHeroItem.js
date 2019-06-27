import SfButton from "../../../atoms/SfButton/SfButton.vue";

const BG_POSITION = [
  "top left",
  "top center",
  "bottom right",
  "bottom left",
  "bottom center",
  "center right",
  "center left",
  "center center"
];
const CONTAINER_ALIGN = ["right"];

export default {
  name: "SfHeroItemItem",
  props: {
    /** Hero item title */
    title: {
      type: String,
      default: ""
    },
    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color */
    background: {
      type: String,
      default: ""
    },
    /** Background image path */
    image: {
      type: String,
      default: ""
    },

    // EXTRA
    bgPosition: {
      type: String,
      default: ""
    },
    containerPosition: {
      type: String,
      default: ""
    }
  },
  computed: {
    bgPositionClass() {
      return BG_POSITION.includes(this.bgPosition)
        ? `bgPosition__${this.bgPosition.split(" ").join("-")}`
        : "";
    },
    containerPositionClass() {
      return CONTAINER_ALIGN.includes(this.containerPosition)
        ? "align-end"
        : "";
    }
  },
  components: {
    SfButton
  }
};
