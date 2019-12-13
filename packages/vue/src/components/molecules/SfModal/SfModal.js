import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfModal",
  model: {
    prop: "visible",
    event: "close"
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
  components: {
    SfOverlay,
    SfIcon
  },
  watch: {
    visible: {
      handler: function(value) {
        if (typeof window === "undefined") return;
        if (value) {
          document.body.style.setProperty("overflow", "hidden");
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.body.style.removeProperty("overflow");
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }
  }
};
