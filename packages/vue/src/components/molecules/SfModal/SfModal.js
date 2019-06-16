import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";

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
      default: false
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
  methods: {
    checkPersistence() {
      if (this.persistent === false) {
        this.$emit("close");
      }
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
    SfOverlay
  }
};
