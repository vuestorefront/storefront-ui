import SfCircleIcon from "@/components/atoms/SfCircleIcon/SfCircleIcon.vue";

export default {
  name: "SfSidebar",
  props: {
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left"
    }
  },
  watch: {
    visible: {
      handler: value => {
        if (value && typeof window !== "undefined") {
          window.document.querySelector("body").style.overflow = "hidden";
        }
        if (!value && typeof window !== "undefined") {
          window.document.querySelector("body").style.overflow = "visible";
        }
      },
      immediate: true
    }
  },
  components: {
    SfCircleIcon
  }
};
