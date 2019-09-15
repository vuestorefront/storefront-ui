import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";

export default {
  name: "SfNotification",
  components: {
    SfIcon,
    SfHeading
  },
  props: {
    // title of the message that will be showed as header 
    title: {
      type: String,
      default: ""
    },
    level: {
      type: Number,
      default: 2
    },
    // the body of the message showed as subtitle
    subtitle: {
      type: String,
      default: ""
    },
    // icon added to the message in desktop mode
    icon: {
      type: String,
      default: "added_to_cart"
    },
    sizeIcon: {
      type: String,
      default: "lg"
    },
    colorIcon: {
      type: String,
      default: "white"
    },
    type: {
      type: String,
      default: "alert",
      validator: function(value) {
        return ["alert", "warning", "info", "success"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    hasSubtitle() {
      return !!this.subtitle || this.$slots.hasOwnProperty("subtitle");
    }
  }  
};
