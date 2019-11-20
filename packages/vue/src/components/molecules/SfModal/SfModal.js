import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfModal",
  model: {
    prop: "visible",
    event: "toggle"
  },
  props: {
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true
    },
    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false
    },
    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "fade"
    },
    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "fade"
    }
  },
  methods: {
    close() {
      this.$emit("toggle", false);
    },
    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    }
  },
  watch: {
    visible: {
      handler: value => {
        if (typeof window === "undefined") return;
        if (value) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      },
      immediate: true
    }
  },
  mounted() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.visible) {
        this.close();
      }
    };
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },
  components: {
    SfOverlay,
    SfIcon
  }
};
