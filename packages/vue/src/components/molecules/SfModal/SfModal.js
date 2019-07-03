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
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    toggle() {
      const keydownHandler = e => {
        if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
          this.toggle();
        }
      };
      if (this.visible) {
        document.addEventListener("keydown", keydownHandler);
        this.$emit("close");
      } else {
        document.removeEventListener("keydown", keydownHandler);
        this.$emit("open");
      }
      this.visible = !this.visible;
    },
    checkPersistence() {
      if (this.persistent === false) {
        this.toggle();
      }
    }
  },
  watch: {
    visible: {
      handler: visibility => {
        if (value && typeof window !== "undefined") {
          window.body.style.setProperty(
            "margin-right",
            `${window.innerWidth - document.body.clientWidth}px`
          ); // better UX
          window.body.style.setProperty("overflow", "hidden");
        }
        if (!value && typeof window !== "undefined") {
          document.body.style.removeProperty("margin-right");
          document.body.style.removeProperty("overflow");
        }
      },
      immediate: true
    }
  },
  components: {
    SfOverlay
  }
};
