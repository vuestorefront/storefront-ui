import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";

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
  mounted() {
    const keydownHandler = e => {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.$emit("close");
      }
    };
    document.addEventListener("keydown", keydownHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", keydownHandler);
    });
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
    SfCircleIcon,
    SfIcon
  }
};
