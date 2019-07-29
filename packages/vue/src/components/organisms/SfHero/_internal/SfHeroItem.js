import SfButton from "../../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfHeroItem",
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
    }
  },
  components: {
    SfButton
  }
};
