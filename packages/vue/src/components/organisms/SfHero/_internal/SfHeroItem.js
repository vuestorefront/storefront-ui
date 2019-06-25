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
    /** Banner title */
    title: {
      type: String,
      default: ""
    },
    /** Banner subtitle (at the top) */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color in HEX (eg #FFFFFF) */
    background: {
      type: String,
      default: ""
    },
    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
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
    // buttonId: {
    //   type: String,
    //   default: ""
    // },
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
  methods: {
  //   onButtonClicked() {
  //     let eventName;
  //     this.buttonId
  //       ? (eventName = `button-${this.buttonId}-clicked`)
  //       : (eventName = `hero-button-${this.title.split(" ").join("-")}-clicked`);
  //     this.$emit(eventName, eventName);
  //     this.$emit('elo', 'cuj');
  //   }
  },
  components: {
    SfButton
  }
};
