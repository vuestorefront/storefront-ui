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
  }
};
