import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfModal",
  props: {
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: () => false
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
      this.$emit("close");
      // remove left code
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
      if (this.visible) {
        // TODO: this is an error right now. what shall it do?
        //  document.addEventListener("keydown", keydownHandler);
        this.$emit("close");
      } else {
        // TODO: this is an error right now. what shall it do?
        //  document.removeEventListener("keydown", keydownHandler);
        this.$emit("open");
      }
    },
    checkPersistence() {
      if (this.persistent === false) {
        this.close();
      }
    }
  },
  watch: {
    visible: {
      handler: function(visibility) {
        if (visibility && typeof window !== "undefined") {
          document.body.style.setProperty(
            "margin-right",
            `${window.innerWidth - document.body.clientWidth}px`
          );
          document.addEventListener("keydown", this.keydownHandler);
          document.body.style.setProperty("overflow", "hidden");
        }
        if (!visibility && typeof window !== "undefined") {
          document.body.style.removeProperty("margin-right");
          document.body.style.removeProperty("overflow");
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },
  components: {
    SfOverlay,
    SfIcon
  }
};
