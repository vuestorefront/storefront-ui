import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfCharacteristic",
  components: {
    SfIcon
  },
  props: {
    /** One of predefined SfIcon colors, default is black.  */
    colorIcon: {
      type: String,
      default: "primary"
    },
    /** One of predefined SfIcon sizes.  */
    sizeIcon: {
      type: String,
      default: "xs"
    },
    /** Svg file iconPath  */
    icon: {
      type: String,
      default: ""
    },
    /** Characteristic title  */
    title: {
      type: String,
      default: ""
    },
    /** Characteristic description  */
    description: {
      type: String,
      default: ""
    }
  }
};
