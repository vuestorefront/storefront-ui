// @vue/component
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default {
  name: "SfSidebar",
  components: {
    SfCircleIcon,
    SfIcon,
    SfOverlay,
    SfHeading
  },
  props: {
    headingTitle: {
      type: String,
      default: ""
    },
    headingSubtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 2
    },
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      position: "left"
    };
  },
  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    }
  },
  watch: {
    visible: {
      handler: value => {
        if (typeof window === "undefined") return;
        if (value) {
          disableBodyScroll(document.body);
        } else {
          enableBodyScroll(document.body);
        }
      },
      immediate: true
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
    this.position = this.$el.classList.contains("sf-sidebar--right")
      ? "right"
      : "left";
  },
  beforeDestroy() {
    enableBodyScroll(document.body);
  }
};
